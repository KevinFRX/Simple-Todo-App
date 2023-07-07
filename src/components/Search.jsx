import { useState } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDebounce from './../hooks/useDebounce';

import './Search.css'

export default function Search({ onSearch }) {
    const [searchValue, setSearchValue] = useState("");
    useDebounce(() => onSearch(searchValue), 500, [searchValue])

    return (
        <div className="search-container">
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
                className="search-input"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    )
}