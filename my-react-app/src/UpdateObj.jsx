import React,{useState} from "react";

function UpdateObj(){
//     const [car, setCar] = useState({
//                         year: 2024,
//                         make: 'ford',
//                         model: 'mustang'
//     })

//    function handleYear(event){
//     setCar(c =>({...c ,year:event.target.value}))
//    }

//    function handleMake(event){
//     setCar(c=>({...c,make:event.target.value}))
//    }

//    function handleModel(event){
//     setCar(c=>({...c,model:event.target.value}))

//    }

//     return(<>

//         <div>
//             <p>Your FAvourite car is{car.year} {car.make} {car.model}</p>
//             <input type="number" value={car.year}onChange={handleYear} /> <br />
//             <input type="text" value={car.make} onChange={handleMake} /> <br />
//             <input type="text" value={car.model} onChange={handleModel} /> <br />

//         </div>
        
//     </>)

    const [foods,setFood]=useState(['apple','banana','mango'])

    function handleAddFood(){
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

            setFood(f=>[...f,newFood])
     }

     function handleDelete(index){
        setFood(foods.filter((_,i)=>i!==index))
     }
    return(
        <div>
            <ul>
                {foods.map((food,index)=><li key={index}>{food}   <button onClick={()=>handleDelete(index)}>Delete</button></li>)}
               
            </ul>
            <input type="text" id="foodInput" placeholder="enter food" />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    )

}

export default UpdateObj