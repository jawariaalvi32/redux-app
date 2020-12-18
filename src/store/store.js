import {createStore} from 'redux'
import CounterReducer from './reducer.js'

const store = createStore(CounterReducer)

export default store