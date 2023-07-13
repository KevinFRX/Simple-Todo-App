import { useState, useRef } from "react"
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalDialog from '../ModalDialog/ModalDialog'
import './Todo.css'

export default function Todo({ className, id, text, isDone, onEdit, onDelete, onToggleCheck }) {
    const [editValue, setEditValue] = useState(text);
    const [showEditDialog, setShowEditDialog] = useState(false)
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [isChecked, setIsChecked] = useState(isDone)
    const inputRef = useRef("")
    const checkboxRef = useRef("")

    function handleProceed() {
        onEdit(id, inputRef.current.value)
    }

    function handleClose() {
        setShowEditDialog(false)
        setEditValue(text)
    }

    function handleToggleCheckbox(e) {
        setIsChecked(checkboxRef.current.checked)
        onToggleCheck(e)
    }

    return (
        <div className={`${className} todo-container ${isChecked ? "done" : ""}`}>
            <ModalDialog title="Delete Task" isOpened={showConfirmDelete} onProceed={onDelete} onClose={() => setShowConfirmDelete(false)} acceptLabel="Accept" cancelLabel="Cancel">
                <p className="delete-dialog-text">Are you sure you want to delete this task?</p>
            </ModalDialog>
            <ModalDialog title="Edit Task" isOpened={showEditDialog} onProceed={handleProceed} onClose={handleClose} acceptLabel="Save" cancelLabel="Discard">
                <input className="dialog-input" ref={inputRef} type="text" placeholder="Edit" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
            </ModalDialog>
            <input
                className="checkbox"
                ref={checkboxRef}
                type="checkbox"
                name="todo-checkbox"
                checked={isChecked}
                onChange={() => handleToggleCheckbox(id)}
            />
            <div className={`todo-text ${isChecked ? "done" : ""}`}>{text}</div>
            <div className="todo-actions">
                <button className="todo-edit-button" type="button" onClick={() => setShowEditDialog(true)}><FontAwesomeIcon icon={faPen} /></button>
                <button className="todo-delete-button" type="button" onClick={() => setShowConfirmDelete(true)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
}