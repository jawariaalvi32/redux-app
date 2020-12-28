import React from 'react';
import './App.css';
import CounterInput from './components/CounterInput';
import CounterOutput from './components/CounterOutput';
import {Provider} from 'react-redux'
import Store from './store/store'
import AddTodo from './components/TodoList/AddTodo';

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <Provider store={Store}>
      <div className="App">
        <CounterInput setCounter={setCounter} counter={counter}/>
        <br/>
        <CounterOutput counter={counter}/>
      </div>
      {/* <AddTodo/> */}
    </Provider>
  );
}

export default App;
