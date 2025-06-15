import { useState } from "react";
import "../style.css";
import { RiResetLeftLine } from "react-icons/ri";

const Counter = () => {
  const [count, setCount] = useState(0);  

  const increment = () => {
    return setCount(count + 1);
  }

   const decrement = () => {
    return setCount(count - 1);
  }

  const reset = () => {
    return setCount(0);
  }


  return (
    <div className="container">
        <div>
            <h1 className="number">{count}</h1>
        </div>

        <div className="btns-container">
            <button onClick={increment} className="btns">+</button>

            <button onClick={reset} className="btns"><RiResetLeftLine /></button>

            <button onClick={decrement} className="btns">-</button>
            

        </div>
    </div>
  )
}

export default Counter