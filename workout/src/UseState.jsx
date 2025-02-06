import React,{useState} from "react"

function UseState(){

    const [count,setCount]=useState(0)
    function increment(){
        setCount(c=>c+1)
    }

    return(
        <>
        <h4>{count}</h4>
        <button onClick={increment}>+</button>
        </>
    )
}

export default UseState