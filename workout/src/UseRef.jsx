import React,{useState,useRef,useEffect} from "react"

function Ref(){

//     const [count,setCount]=useState(0)
//  const   prevState=useRef(0)

//         useEffect(()=>{
//             prevState.current=count
//         })

//     return(
//         <>
//         <h3>{count}</h3>
//         <h3>{prevState.current}</h3>
//         <button onClick={()=>{setCount(count+1)}}>+</button>
//         </>
//     )


    const inputRef=useRef(null)

    function handleInput(){
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "lightyellow";  
    }
    return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput} >click</button>
        </div>
    )
}

 

export default Ref

