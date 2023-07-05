import { useRef } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search({ onSearch }) {
    const ref = useRef(null)

    return (
        <>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onChange={(e) => {onSearch(e.target.value)}} />
        </>
    ) 
}