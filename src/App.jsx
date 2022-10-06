
import { useContext } from 'react';
import {useReducer } from 'react'
import './App.css'
import { DataContext } from './context/DataContext';
import Profile from './Profile';



function App() {
 
// const [count, setCount] = useState(0)

const context = useContext(DataContext)
console.log(context);

  return (
    <div className="App">
    <h2>Count: {context.state} </h2>
    <button onClick={context.handleIncrement}>Increment</button>
    <button onClick={context.handleDecrement}>Decrement</button>
    <button onClick={context.handleReset}>Reset</button>
    <Profile />
    </div>
  )
}

export default App
