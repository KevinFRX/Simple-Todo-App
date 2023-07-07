import { useState } from "react"

import ModalDialog from './ModalDialog'
import './Todo.css'

export default function Todo({ className, id, text, isDone, onDelete }) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    return (
        <div className={`${className} todo-container`}>
            <ModalDialog title="Delete Task" isOpened={showConfirmDelete} onProceed={onDelete} onClose={() => setShowConfirmDelete(false)} acceptLabel="Accept" cancelLabel="Cancel">
                <p>Are you sure you want to delete this task?</p>
            </ModalDialog>
            <input type="checkbox" name="todo-checkbox" />
            <div>{text}</div>
            <div className="todo-actions">
                <button className="todo-delete-button" type="button" onClick={() => setShowConfirmDelete(true)}>Delete</button>
            </div>
        </div>
    )
}