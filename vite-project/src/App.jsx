import Youtube  from "./youtube"
import { useState } from "react";

function App() {

  const [counter , setCounter ]= useState(0);
  
  const addValue = () => {
   setCounter(counter+1)
  }
  const decValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
        <h1>hello everyone {counter} </h1>
        <h2>Counter value : {counter} </h2>
        <button onClick={addValue}>Add Value</button> { }
        <button onClick ={decValue}>remove value</button>
        <p>footer : {counter} </p>

        

    </>
  )
}

export default App
