import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(12)
  // let counter = 0

  const addValue = () => {
    if(counter < 20){
      setCounter(counter+1)
    }
    else{
      setCounter(counter)
    }
  }
  const DecValue = () => {
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <br />
      <button onClick={DecValue}>Decrese Value</button>
    </>
  )
}

export default App
