import { useState, useEffect } from 'react'

import Search from './Search'
import AddTask from './AddTask'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList({ todoList, onDelete }) {
    return (
        <>
            {todoList.map((td, index) => (
                <Todo className={index % 2 == 0 ? "even-row" : "odd-row"} key={td.id} {...td} onDelete={() => onDelete(td.id)} />
            ))}
        </>
    )
}