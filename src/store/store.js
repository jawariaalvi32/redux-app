import {createStore} from 'redux'
import CounterReducer from './reducer/CounterReducer.js'
import TodoReducer from './reducer/TodoReducer.js';

// const store = createStore(CounterReducer)
const store = createStore(TodoReducer)

export default store