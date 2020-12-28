export const add = "ADD";
export const del = "DELETE";
export const delAll = "DELETEALL";
export const edit = "EDIT"

export const addTodo = (task) => {
    console.log(task)
    return{
        type: add,
        payload: {
            id : Math.random(0,99),
            task: task
        }
    }
}
export const delTodo = (id,todo) => {
    let newTodo = todo.filter(
        item => (
            item.id != id
        )
    )
    return {
        type: del,
        payload: newTodo
    }
}
export const editTodo = (id, todo) => {
    let updatedTodo = id.map(
        item => {
            if(item.id == todo.id){
                item.task = "ddd"
            }
        }
    )
    console.log(updatedTodo)

    return {
        type: edit,
        payload: updatedTodo
    }
}
export const deleteAll = () => {
    return {
        type: delAll,
        payload: []
    }
}