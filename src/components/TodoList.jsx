import Todo from './Todo'

export default function TodoList({ todoList, onDelete}) {
    return (
        todoList.map((td) => (
            <Todo key={td.id} id={td.id} text={td.text} isDone={td.isDone} onDelete={() => onDelete(td.id)}/>
        ))
    )
}