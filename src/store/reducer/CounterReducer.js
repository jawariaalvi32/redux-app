// REACT_REDUX 

// const initailaState = {
//     counter : 0
// }

// export default function CounterReducer(state = initailaState, action) {
//     switch (action.type) {
//         case 'INCREAMENT' :
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case 'DECREAMENT' :
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         default:
//             return state
//     }
// }

// REDUX TOOLKIT

import {createReducer} from '@reduxjs/toolkit'
import {inc, dec} from '../action/CounterAction'

const counterReducer = createReducer(0, {
    [inc] : state => state + 1,
    [dec] : state => state - 1,
});

export default counterReducer