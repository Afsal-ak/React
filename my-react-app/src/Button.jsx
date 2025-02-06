
function Button(){

        // const handleClick=(name)=>console.log(name)
        // let count=0

        // const handleClick=(name)=>{
        //     if(count<3){
        //         count++
        //         console.log(`${name} you cicked ${count} time`)
        //     }else{
        //         console.log('stop')
        //     }
        // }

        //event handle
        const handleClick=(e)=>e.target.textContent='stop'

    return(

        <button onClick={(e)=>handleClick(e)}>click me</button>
     )
}

export default Button