import {createSlice} from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
    name : 'counter',
    initialState: 0,
    reducers: {
        inc : state => state + 1,
        dec : state => state - 1,
    },

}) 

export const {inc, dec} = CounterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default CounterSlice.reducer

// Noneed of acton.js, reducer.js delete them
