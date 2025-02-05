// import React from 'react'

import { useState } from "react"

const StateScreen = () => {
    // const count =0;
    let [count, setCount] = useState(0);
    const [student,setStudents]=useState([])


  return (
    <div>
      <h1>We are learnig state</h1>
      <button
      onClick={()=>{
        setCount(count+1)
        console.log("Count is ",count)
      }}
      >Click me</button>
      <p>count is {count}</p>
      <button
      onClick={()=>{
        setCount(count-1)
        console.log("Count is ",count)
      }}
      >Click me</button>
      <p>count is {count}</p>
    </div>
  )
}

export default StateScreen
