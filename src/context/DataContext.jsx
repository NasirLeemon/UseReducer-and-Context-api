import { createContext, useReducer } from "react";



export const DataContext = createContext()

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET'

const countReducer = (state, action) => {

  const {type, payload} = action

  switch (type) {
    case INCREMENT :
      return state + payload
      
  case DECREMENT : 
  return  state - payload

  case RESET : 
  return 0
    default: 
    return state
  }

}

export const DataProvider = ({children}) => {


    const [state, dispatch] = useReducer(countReducer, 0)

const handleIncrement = () => {
  dispatch({type : INCREMENT, payload : 5})
}

const handleDecrement = () => {
  dispatch({type : DECREMENT, payload : 3})
}

const handleReset = () => {
  dispatch({type : RESET})
}



const value = {
    name: 'Abu Nasir Leemon',
    Profession : 'Student',
    age : 26,
    state,
    handleIncrement,
    handleDecrement,
    handleReset
}



    return (
        <DataContext.Provider value={value}>
                {children}
        </DataContext.Provider>
    )
}