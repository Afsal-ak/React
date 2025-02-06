import React,{useState} from "react";

function OnChange(){

    const [name,setName]=useState('')

    function set(e){
        setName(e.target.value)
    }
    return(
        <div>
            <input type="text"   onChange={set}/>
            <p>your inout is {name}</p>
        </div>
    )
}

export default OnChange