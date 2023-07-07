import { useState, useEffect } from 'react'

import Search from './Search'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList({ todoList, onDelete }) {
    const [filteredList, setFilteredList] = useState(todoList)
    const [searchText, setSearchtext] = useState("")

    useEffect(() => {
        findTasks()
    }, [todoList]
    )
    useEffect(() => {
        findTasks()
    }, [searchText]
    )

    function findTasks() {
        const newList = todoList.filter((todo) => todo.text.includes(searchText))
        setFilteredList(newList)
    }

    return (
        <>
            <Search onSearch={(text) => setSearchtext(text)} />
            {filteredList.map((td, index) => (
                <Todo className={index % 2 == 0 ? "even-row" : "odd-row"} key={td.id} {...td} onDelete={() => onDelete(td.id)} />
            ))}
        </>
    )
}