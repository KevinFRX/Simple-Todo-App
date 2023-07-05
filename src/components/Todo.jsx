import { useState } from "react"

import ModalDialog from './ModalDialog'

export default function Todo({ id, text, isDone, onDelete }) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    return (
        <>
            <ModalDialog title="Delete Task" isOpened={showConfirmDelete} onProceed={onDelete} onClose={() => setShowConfirmDelete(false)} acceptLabel="Accept" cancelLabel="Cancel">
                <p>Are you sure you want to delete this task?</p>
            </ModalDialog>
            <div>{text}</div>
            <input type="checkbox" name="todo-checkbox" />
            <button type="button" onClick={() => setShowConfirmDelete(true)}>Delete</button>
        </>
    )
}