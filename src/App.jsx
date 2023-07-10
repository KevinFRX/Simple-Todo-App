import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage"

import Header from "./components/Header";
import TodoList from './components/TodoList'
import './App.css'

function App() {
    const [todoList, setTodoList] = useLocalStorage('TODO_LIST', []);
    const [filteredList, setFilteredList] = useState(todoList)
    const [searchText, setSearchText] = useState("")

    const createTodo = (text) => {
        setTodoList((currentTodoList) => [...currentTodoList, { "id": crypto.randomUUID(), "text": text, "isDone": false }])
    }
    const deleteTodo = (id) => {
        setTodoList((currentTodoList) => currentTodoList.filter(td => td.id !== id))
    }

    // FILTER

    const handleSearch = (text) => {
        setSearchText(text)
    }

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
        <div className='app-container'>
            <Header onSearch={handleSearch} onCreate={createTodo} />
            <TodoList todoList={filteredList} onDelete={deleteTodo} />
        </div>
    )
}

export default App