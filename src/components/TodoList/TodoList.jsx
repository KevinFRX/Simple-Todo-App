import Todo from '../Todo/Todo'
import './TodoList.css'

export default function TodoList({ todoList, onEdit, onDelete }) {
    return (
        <>
            {todoList.map((td, index) => (
                <Todo className={index % 2 == 0 ? "even-row" : "odd-row"} key={td.id} {...td} onEdit={onEdit} onDelete={() => onDelete(td.id)} />
            ))}
        </>
    )
}