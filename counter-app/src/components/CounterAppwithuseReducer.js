import { useReducer } from 'react';

const initialCount=10;
const INCREMENT_COUNT='increment'
const DECREMENT_COUNT='decrement'
const SET_VALUE_TO_ADD='change_value_to_add'
const ADD_VALUE_TO_COUNT='add_value_to_count'

const reducer=(state,action)=>{

  switch (action.type) {
    case INCREMENT_COUNT:return{
      ...state,
      count:state.count+1
    }

    case DECREMENT_COUNT:return{
      ...state,
      count:state.count-1
    }

    case SET_VALUE_TO_ADD:return{
      ...state,
      valueToAdd:action.payload
    }

    case ADD_VALUE_TO_COUNT:return{
      ...state,
      count:state.count+state.valueToAdd,
      valueToAdd:0
    }
  
    default:return state
  }

}


function CounterAppwithuseReducer() {

  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)

  const [state, dispatch] = useReducer(reducer, {
    count:initialCount,
    valueToAdd:0
  })

  console.log("state",state)

  const increment=()=>{
    // setCount(count+1)
    dispatch({
      type:INCREMENT_COUNT
    })   
  }

  const decrement=()=>{
    // setCount(count-1)
    dispatch({
      type:DECREMENT_COUNT
    })    
  }

  const handleChange=(event)=>{
    const value=parseInt(event.target.value) || 0;

    // setValueToAdd(value)
    dispatch({
      type:SET_VALUE_TO_ADD,
      payload:value
    })
    console.log(typeof value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    // setCount(count+valueToAdd)
    // setValueToAdd(0)
    dispatch({
      type:ADD_VALUE_TO_COUNT
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count is {state.count}</h1>
        <div className='d-flex flex-row'>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
        <form style={{ display: 'flex',flexDirection: 'column', margin:"5%"}} onSubmit={handleSubmit}>
          <label htmlFor='lot'>Add a lot!</label>
          <input type="number" name="lot" id="lot" value={state.valueToAdd ||""} onChange={handleChange}/>
          <button type='submit'>Add it</button>
        </form>
      </header>
    </div>
  );
}

export default CounterAppwithuseReducer;