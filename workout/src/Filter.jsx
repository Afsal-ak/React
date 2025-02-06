function Filter(){
    const person=[{id:1,name:'asd',Active:true},
        {id:2,name:'rrsd',Active:false},
        {id:2,name:'axxsd',Active:false}
    ]
    let age=[2,32,55,6]
    const activeUser=person.filter((user)=>user.Active !==false)
    const total=age.reduce((max,user)=>max>user?max:user)

    return(
        <ul>
            {activeUser.map((data)=><li key={data.id}>{data.name}</li>)}
            {total}
        </ul>
    )
}
export default Filter