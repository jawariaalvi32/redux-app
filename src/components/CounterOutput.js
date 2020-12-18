import React from 'react'
import {useSelector} from "react-redux";

function CounterOutput() {
    const counter = useSelector(state => state.counter)
    return (
        <div>
            <h5>Count: {counter}</h5>
        </div>
    )
}

export default CounterOutput
