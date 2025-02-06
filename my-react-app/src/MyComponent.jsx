import React,{useState} from "react"

function MyComponent(){

    //onclick


    // const [name,setName]=useState('guest')

    // let changeName=()=>{
    //     setName('asdf')
    // }

    // const [count,setCount]=useState(0)

    // const increment=()=>{
    //     setCount(count+1)
    // }
    // const decrement=()=>{
    //     setCount(count-1)
    // }

    // const reset=()=>{
    //     setCount(0)
    // }

    // return(
    //     <>
     
    //     {/* <p>name{name}</p>
    //     <button onClick={changeName}>setName</button> */}
    //     <h3>count={count}</h3>
    //     <button onClick={increment}>increment+</button>
    //     <button onClick={reset}>reset</button>
    //     <button onClick={decrement}>decrement-</button>

    //     </>

    
    // )

    //on change

    const [name,setName]=useState()
    const [comment,setComment]=useState()

    const handleNameChange=(event)=>{
        setName(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    return(
        <>
            <div>
                <input value={name} onChange={handleNameChange} type="text" />
                <p>name:{name}</p>
            </div>

            <div>
                <textarea value={comment} onChange={handleCommentChange} type="text-area" />
                <p>comment:{comment}</p>
            </div>

        </>
    )
}

export default MyComponent