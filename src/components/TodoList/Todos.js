import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {delTodo, editTodo} from '../../store/action/TodoAction'

function Todos() {
    const state = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const handleDel = (id) => {
        dispatch(delTodo(id,state))
    }
    const handleEdit = (id) => {
        let newTodo = {id:id, task: "JJ"}
        dispatch(editTodo(state,newTodo))
    }
    return (
        <div>
            {
                state.map((item) => {
                 return (
                    <div>
                        <li key={item.id}>{item.task}</li>
                        <button onClick={() => handleDel(item.id)}>Delete</button>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                    </div>
                 )
                })
            }
        </div>
    )
}

export default Todos
