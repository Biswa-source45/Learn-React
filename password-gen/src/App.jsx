import { useState,useCallback,useEffect } from 'react'
import './App.css'


function App() {
  const [length,setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState(" ")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*_-=+`~{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed])

 
  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1>My first Project</h1>
          <h1 className=' text-white text-center'>Password Generator</h1>
          <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text" 
            value={password} 
            className=' outline-none w-full py-1 px-3 bg-white'
            placeholder='password'
            readOnly 
            />
            <button className=' outline-none bg-blue-700 text-white px-3 py-3 shrink-0'>Copy</button>

          </div>

          <div className=' flex text-sm gap-x-2'>
            <div className=' flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={12}
              value={length}
              className=' cursor-pointer '
              onChange={(e)=>{
                setLength(e.target.value)
              }}
              />
              <label>length:{length}</label>
            </div>

            <div className=' flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numAllowed}
              id="numinput"
              className=' cursor-pointer '
              onChange={()=>{
                setNumAllowed((prev)=>!prev)
              }}
              />
              <label htmlFor='numinput'>numbers</label>
            </div>

            <div className=' flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="charinput"
              className=' cursor-pointer '
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
              />
              <label htmlFor='charinput'>characters</label>
            </div>
          </div>
        </div>

    </>
  )
}

export default App
