import { useState } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TodoList from './TodoList'

export default function Search() {
    const [searchText, setSearchText] = useState('')

    const [values, setValues] = useState(JSON.parse(localStorage.getItem('TODO_LIST')) || [])

    const findTasks = (key, searchText) => {
        e.preventDefault()
        const values = JSON.parse(localStorage.getItem(key)) || [];
        if (searchText) {
            return values.filter((value) => value.includes(searchText));
        } else {
            return values;
        }
    };
    function changeInputState(e) {
        setSearchText(e.target.value)
    }

    return (
        <form onSubmit={findTasks}>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search..." onChange={changeInputState} />
            <button type="submit">Search</button>
        </form>
    )
}