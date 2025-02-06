function Prop(props){
    let person=props.data
    return(
        <>
        <ul>
       {person.map((data,index)=><li key={index}>
        {data.name} {data.age}
       </li>)}
       </ul>
        </>
    )
}

export default Prop