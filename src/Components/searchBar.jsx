const SearchBar = ({ query, queryFunction }) => {
    return (
        <>
            <div>
                <h1>Disney search page!</h1>
                <label>Type a character name:</label>
                <br></br>
                {/* Input field to enter character name*/}
                <input type="text" placeholder="Enter name here" value={query}></input>
                {/* Search button - should return results containing value*/}
                <button type="button" onClick={queryFunction}>Search</button>
            </div>
        </>
    );
}

export default SearchBar;