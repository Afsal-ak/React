

function List(props){
    // let fruits=['apple','mango','pineapple','banana']  //array of string
//   const  fruits=[{id:1,name:'apple'},
//         {id:2,name:'mango'},
//         {id:3,name:'pineapple'},
//         {id:4,name: 'banana'},
// ]; //array of objects
    // let fruitItems=fruits.map((item)=><li key={item.id}> {item.name}</li>)


    const itemList=props.items
    const category=props.category
        let listItems=itemList.map((item)=><li key={item.id}> {item.name}: <b>{item.color}</b></li>)


    return(
        <> <h3>{category}</h3> <p><ol>{listItems}</ol></p></>
    )
}

export default List