import { useState } from "react"

import ModalDialog from './ModalDialog'
import './Todo.css'

export default function Todo({ className, id, text, isDone, onDelete }) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [isChecked, setIsChecked] = useState(isDone)

    return (
        <div className={`${className} todo-container ${isChecked ? "done" : ""}`}>
            <ModalDialog title="Delete Task" isOpened={showConfirmDelete} onProceed={onDelete} onClose={() => setShowConfirmDelete(false)} acceptLabel="Accept" cancelLabel="Cancel">
                <p>Are you sure you want to delete this task?</p>
            </ModalDialog>
            <input
                className="checkbox"
                type="checkbox"
                name="todo-checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className={`todo-text ${isChecked ? "done" : ""}`}>{text}</div>
            <div className="todo-actions">
                <button className="todo-delete-button" type="button" onClick={() => setShowConfirmDelete(true)}>Delete</button>
            </div>
        </div>
    )
}