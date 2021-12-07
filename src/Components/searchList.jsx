import { useState } from "react";
import Search from "./search";

const SearchList = ({ list }) => {
    const [query, setQuery] = useState("");

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }
    return (
        <>
            <div>
                <Search query={query} />
                // filtering results go here
            </div>
        </>
    );
}

export default SearchList;