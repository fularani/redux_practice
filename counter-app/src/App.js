import React from 'react';
import './App.css';
import CounterAppwithImmer from './components/CounterAppwithImmer';
import CounterAppwithuseReducer from './components/CounterAppwithuseReducer';
import CounterAppwithuseState from './components/CounterAppwithuseState';

const App = () => {
  return (
    <div className="App">
      <header className="App-header" style={{display:'flex',flexDirection:'row'}}>
        <div style={{border:'1px solid blue'}}>
          <h1>Counter App using useState</h1>
          <CounterAppwithuseState/>
        </div>
        <div style={{border:'1px solid blue'}}>
          <h1>Counter App using useReducer</h1>
          <CounterAppwithuseReducer/>
        </div>
        <div style={{border:'1px solid blue'}}>
          <h1>Counter App using useReducer and Immer</h1>
          <CounterAppwithImmer/>
        </div>
      </header>
    </div>
  )
}

export default App
