import React from 'react'
import { useDispatch } from 'react-redux'
import {addTodo, deleteAll} from '../../store/action/TodoAction'
import Todos from './Todos'

function AddTodo() {
    const dispatch = useDispatch()
    const [todo, setTodo] = React.useState('')

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setTodo(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        e.target.parentElement.firstChild.value = ''
        dispatch(addTodo(todo))
    }
    const handleDel = (e) => {
        e.preventDefault()
        dispatch(deleteAll())
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handlesubmit}>Add</button>
            <button onClick={handleDel}>Delete All</button>
            <Todos/>
        </div>
    )
}

export default AddTodo
