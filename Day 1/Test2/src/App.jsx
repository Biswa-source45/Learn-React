import { useEffect } from "react"
import User from "./user"

function App() {

  useEffect(()=>{
  console.log("render app ")
  },[])


  return (
    <>
    <User/>
      <h1>Biswabhusans sahoo</h1>
    </>
  )

}

export default App
