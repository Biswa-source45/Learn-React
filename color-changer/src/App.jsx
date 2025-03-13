
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("black")
  return (
    <>    
      <div id='mnbx' style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
        <div id='nav'>
          <div id='bt1'>
          <button onClick={() => setColor("red")} id='btns' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("yellow")} id='btns' style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={() => setColor("green")} id='btns' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => setColor("violet")} id='btns' style={{ backgroundColor: "violet" }}>Violet</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
