import React,{useState} from "react";
import './App.css'
function Button(){
   const [count,setCount]=useState(0)

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }

    return (<>

        <div className="container">
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    </>
    )
}

export default Button