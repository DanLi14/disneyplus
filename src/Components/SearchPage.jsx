import { useState } from "react";
import Search from "./Search";
import CharacterCard from "./characterCard";
import axios from "axios";
import data from "https://api.disneyapi.dev/characters"

function SearchPage() {

    const [q, setQ] = useState("");


    const queryHandler = (e) => {
        setQ(e.target.value);
    }

    const requestChar = (e) => {
        axios.get("");
    }

return (
    <>
        <Search query={q} queryFunction={queryHandler}/>
        <CharacterCard list={data} query={q}/>
    </>
)

}
export default SearchPage;