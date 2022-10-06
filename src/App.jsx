
import {useReducer } from 'react'
import './App.css'


const countReducer = (state, action) => {
    // console.log(state, action);
    if (action.type === 'INCREMENT'){
      return state + 1 
    } else if ( action.type === 'DECREMENT'){
      return state - 1
    } else if (action.type === 'RESET') {
      return 0
    }
}

function App() {
 
// const [count, setCount] = useState(0)
const [state, dispatch] = useReducer(countReducer, 0)

const handleIncrement = () => {
  dispatch({type : 'INCREMENT'})
}

const handleDecrement = () => {
  dispatch({type : 'DECREMENT'})
}

const handleReset = () => {
  dispatch({type : 'RESET'})
}


  return (
    <div className="App">
    <h2>Count: {state} </h2>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
