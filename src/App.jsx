import { useState, useEffect, useRef } from 'react'

// import useApiService from './services/useApiService'
import TodoHeader from './components/TodoHeader'
import SearchInput from './components/SearchInput'
import TodoList from './components/TodoList'
import ModalDialog from './components/ModalDialog'
import './App.css'

function App() {
    // const { getToDos } = useApiService()

    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('TODO_LIST')) || [])
    const [filteredList, setFilteredList] = useState(todoList)

    const createTodo = (text) => {
        setTodoList((currentTodoList) => [...currentTodoList, { "id": crypto.randomUUID(), "text": text, "isDone": false }])
    }
    const deleteTodo = (id) => {
        setTodoList((currentTodoList) => currentTodoList.filter(td => td.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('TODO_LIST', JSON.stringify(todoList))
    }, [todoList])

    // header
    const [showAddTodoModal, setShowAddTodoModal] = useState(false);
    const inputRef = useRef("")

    // search
    const searchRef = useRef(null)

    function findTasks() {
        const newList = todoList.filter((todo) => todo.text.includes(searchRef.current.value))
        setFilteredList(newList)
    }

    return (
        <div>
            {/* <TodoHeader onCreate={createTodo} /> */}
            <div>
                <div>
                    <button onClick={() => setShowAddTodoModal(true)}>Add Task</button>
                </div>

                <ModalDialog title="Add Task" isOpened={showAddTodoModal} onProceed={() => createTodo(inputRef.current.value)} onClose={() => setShowAddTodoModal(false)} acceptLabel="Add" cancelLabel="Cancel">
                    <input ref={inputRef} type="text" placeholder="A new task" />
                </ModalDialog>
            </div>
            {/* <SearchInput /> */}

            {/* <FontAwesomeIcon icon={faSearch} /> */}
            <input ref={searchRef} type="text" placeholder="Search..." />
            <button onClick={findTasks} type="button">Search</button>

            <TodoList todoList={filteredList} onDelete={deleteTodo} />
        </div>
    )
}

export default App
