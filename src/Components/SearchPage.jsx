import { useEffect, useState } from "react";
import Search from "./searchBar";
import CharacterCard from "./characterCard";
import axios from "axios";

function SearchPage() {

    const [q, setQ] = useState("");
    const [data, setData] = useState([])


    const queryHandler = (e) => {
        setQ(e.target.value);
    }

    const getData = async () => {
        const res = await axios.get(`http://api.disneyapi.dev/characters`);
        const data = res.data.data;
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    //  const getData = async () => {
    // const res = await axios.get(`http://api.disneyapi.dev/characters`)
    // console.log(res.data.data[0].imageUrl)
    // const data = res.data.data;
    // const requestChar = (e) => {
    //     axios.get("");
    // }

return (
    <>
        <Search query={q} queryFunction={queryHandler}/>
        <CharacterCard list={data} query={q}/>
    </>
)

}
export default SearchPage;