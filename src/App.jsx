import { useState, useEffect } from 'react'
import useLocalStorage from "./hooks/useLocalStorage"

// import useApiService from './services/useApiService'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import './App.css'

function App() {
    // const { getToDos } = useApiService()

    // const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('TODO_LIST')) || [])
    const [todoList, setTodoList] = useLocalStorage('TODO_LIST', []);

    const createTodo = (text) => {
        setTodoList((currentTodoList) => [...currentTodoList, { "id": crypto.randomUUID(), "text": text, "isDone": false }])
    }
    const deleteTodo = (id) => {
        setTodoList((currentTodoList) => currentTodoList.filter(td => td.id !== id))
    }

    // useEffect(() => {
    //     localStorage.setItem('TODO_LIST', JSON.stringify(todoList))
    // }, [todoList])

    return (
        <div className='app-container'>
            <AddTask onCreate={createTodo} />
            <TodoList todoList={todoList} onDelete={deleteTodo} />
        </div>
    )
}

export default App