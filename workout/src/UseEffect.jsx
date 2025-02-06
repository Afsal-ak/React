import React,{useState,useEffect} from "react";

function UseEffectPrb(){
  const [count,setCount]=useState(1)
 
  
  useEffect(()=>{
    document.title=`count ${count}}`
    

       return () => {
      console.log("  Message Component Unmounted!");
    };
},[])

  return(
    <>
    <h3>{count}</h3>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    </>
  )
}

export default UseEffectPrb