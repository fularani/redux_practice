import { useState } from 'react';

const initialCount=10;

function CounterAppwithuseState() {

  const [count, setCount] = useState(initialCount)
  const [valueToAdd, setValueToAdd] = useState(0)

  const increment=()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    setCount(count-1)
  }

  const handleChange=(event)=>{
    const value=parseInt(event.target.value) || 0;

    setValueToAdd(value)
    console.log(typeof value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setCount(count+valueToAdd)
    setValueToAdd(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count is {count}</h1>
        <div className='d-flex flex-row'>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
        <form style={{ display: 'flex',flexDirection: 'column', margin:"5%"}} onSubmit={handleSubmit}>
          <label htmlFor='lot'>Add a lot!</label>
          <input type="number" name="lot" id="lot" value={valueToAdd ||""} onChange={handleChange}/>
          <button type='submit'>Add it</button>
        </form>
      </header>
    </div>
  );
}

export default CounterAppwithuseState;