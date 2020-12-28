import React from 'react'
import {useDispatch} from "react-redux";
// import {inc, dec} from '../store/action/CounterAction'

import {inc, dec} from '../store/CounterSlice' // REDUX TOOLKIT WITH SLICE

function CounterInput() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(inc())}>+</button>
            <button onClick={() => dispatch(dec())}>-</button>
        </div>
    )
}

export default CounterInput
