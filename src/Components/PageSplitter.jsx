import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import DisneySearch from './DisneySearch';

const PageSplitter = () => {
  const [q, setQ] = useState("");
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)

  const queryHandler = (e) => {
    setQ(e.target.value);
  }

  console.log(q)

  const queryString = (string) => string.includes(q);

  const getData = async () => {
    const res = await axios.get(`http://api.disneyapi.dev/characters`)
    const data = res.data.data;
    let filteredList = data.filter((c) => queryString(c.name));
    const slice = filteredList.slice(offset, offset + perPage)
    // const slice = data.slice(offset, offset + perPage)
    const postData = slice.map(pd =>
      <div
        key={pd.id}>
        <p>Character: {pd.name}</p>
        {/* <img src={pd.imageUrl} alt={pd.name} /> */}
        <img src={(pd.imageUrl)
          ? pd.imageUrl.split("/revision/")[0]
          : "placeholder"} alt={pd.name} />
        <p>Stars in: {pd.tvShows}</p>
      </div>)
    setData(postData)
    setPageCount(Math.ceil(data.length / perPage))
    }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };

  useEffect(() => {
  getData()
  }, [q])

  useEffect(() => {
  getData()
  }, [offset])

return (
  <div className="App">
    < DisneySearch  query={q} queryFunction={queryHandler}/>
    {data}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </div>
  );
}

export default PageSplitter;