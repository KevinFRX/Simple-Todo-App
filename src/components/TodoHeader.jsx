import { useState, useRef } from "react";

import ModalDialog from './ModalDialog'
import './TodoHeader.css'

export default function TodoHeader({ onCreate }) {
    const [showAddTodoModal, setShowAddTodoModal] = useState(false);
    const inputRef = useRef("")

    function createTodo() {
        onCreate(inputRef.current.value)
    }
    function openModal() {
        setShowAddTodoModal(true);
    }
    function closeModal() {
        setShowAddTodoModal(false);
    }

    return (
        <div>
            <div>
                <button onClick={openModal}>Add Task</button>
            </div>

            <ModalDialog title="Add Task" isOpened={showAddTodoModal} onProceed={createTodo} onClose={closeModal} acceptLabel="Add" cancelLabel="Cancel">
                <input ref={inputRef} type="text" placeholder="A new task" />
            </ModalDialog>
        </div>
    )
}