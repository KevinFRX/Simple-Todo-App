import { useState, useRef } from "react";

import ModalDialog from '../ModalDialog/ModalDialog'
import './AddTask.css'

export default function AddTask({ onCreate }) {
    const [showAddTodoModal, setShowAddTodoModal] = useState(false);
    const inputRef = useRef("")

    function handleProceed() {
        setShowAddTodoModal(false)
        onCreate(inputRef.current.value)
        inputRef.current.value = ""
    }

    return (
        <div>
            <div>
                <button className="add-task-button" onClick={() => setShowAddTodoModal(true)}>Add Task</button>
            </div>

            <ModalDialog title="Add Task" isOpened={showAddTodoModal} onProceed={handleProceed} onClose={() => setShowAddTodoModal(false)} acceptLabel="Add" cancelLabel="Cancel">
                <input className="dialog-input" ref={inputRef} type="text" placeholder="A new task" />
            </ModalDialog>
        </div>
    )
}