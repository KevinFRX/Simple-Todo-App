import { useState, useEffect } from 'react'

import Search from './Search'
import Todo from './Todo'

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
            {filteredList.map((td) => (
                <Todo key={td.id} id={td.id} text={td.text} isDone={td.isDone} onDelete={() => onDelete(td.id)} />
            ))}
        </>
    )
}