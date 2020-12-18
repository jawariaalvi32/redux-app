import React from 'react';
import './App.css';
import CounterInput from './components/CounterInput';
import CounterOutput from './components/CounterOutput';
import {Provider} from 'react-redux'
import Store from './store/store'

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <Provider store={Store}>
      <div className="App">
        <CounterInput setCounter={setCounter} counter={counter}/>
        <br/>
        <CounterOutput counter={counter}/>
      </div>
    </Provider>
  );
}

export default App;
