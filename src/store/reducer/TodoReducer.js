import {add, del, delAll} from '../action/TodoAction'
const initailaState = {
    todo : [
        {id: 1, task:"Hi"},
    ]
}

export default function TodoReducer(state = initailaState, action) {
    console.log("A", action.payload)
    switch (action.type) {
        case add : 
            return {
                ...state,
                todo: [...state.todo,action.payload]
            }
        case del :
            return {
                ...state,
                todo: action.payload
            }
        case delAll :
            return {
                ...state,
                todo:action.payload
            }
        default:
            return state
    }
}