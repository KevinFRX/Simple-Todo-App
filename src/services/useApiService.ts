export default function useApiService() {
    let toDos = [{id: "crypto.randomUUID", name: "Kevin", isDone: true}, {id: "2", name: "Yoel", isDone: false}]
    const getToDos = () => {
        return toDos
    }
    const deleteToDo = (id) => {
        console.log("hola")
        toDos = toDos.filter(td => td.id !== id)
    }
    return {
        getToDos, deleteToDo
    }
}