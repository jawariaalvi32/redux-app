// REACT-REDUX

// import {createStore} from 'redux'
// import CounterReducer from './reducer/CounterReducer.js'
// import TodoReducer from './reducer/TodoReducer.js';

// // const store = createStore(CounterReducer)
// const store = createStore(TodoReducer)

// export default store

// REDUX TOOLKIT

import {configureStore} from '@reduxjs/toolkit'
// import counterReducer from './reducer/CounterReducer' // REDUX TOOLKIT WITHOUT SLICER

import counterReducer from './CounterSlice' // REDUX TOOLKIT WITH SLICER
const store = configureStore({
    reducer:{
        counter: counterReducer
    } 
})

export default store


