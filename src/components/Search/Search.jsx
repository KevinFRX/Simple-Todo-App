import { useState } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDebounce from '../../hooks/useDebounce';

import './Search.css'

export default function Search({ onSearch }) {
    const [searchValue, setSearchValue] = useState("");
    useDebounce(() => onSearch(searchValue), 500, [searchValue])

    return (
        <div className="search-box">
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
                className="search-input"
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="x-button" onClick={() => setSearchValue("")}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    )
}