import { useState } from "react"


const Mycounter = () => {
    const [count, setCount] = useState(0)
    const handleIncrement=()=>{
        setCount(count +1)
    }
    const handleDecrement=()=>{
        setCount(count -1)
    }
  return (
    <>
    <div>Counter:{count}</div>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default Mycounter
