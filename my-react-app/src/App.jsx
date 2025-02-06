import Header from "./Header.jsx" 
import Footer from "./Footer.jsx";
// import Card  from "./Card.jsx";  //crad
import Student from './Student.jsx' //props
import UserGreeting from "./UserGreeting.jsx";// conditional render
import List from "./List.jsx";//list -[array]
import Button from "./Button.jsx";  //onclick or events
import MyComponent from "./MyComponent.jsx";
import UpdateObj from "./updateObj.jsx";
function App() {
//   const fruits = [
//     { id: 1, name: "apple", color: "red" },
//     { id: 2, name: "mango", color: "yellow" },
//     { id: 3, name: "pineapple", color: "brown" },
//     { id: 4, name: "banana", color: "yellow" },
// ]; // Array of objects with name and color

// const vegetable = [
//   { id: 1, name: "tomato", color: "red" },
//   { id: 2, name: "pototo", color: "yellow" },
//   { id: 3, name: "chilly", color: "brown" },
//   { id: 4, name: "banana", color: "yellow" },
// ]; 

  return(
    <>
     <Header/> 
    {/* <Card/> */}
   {/* <Student name='Afsal' age={30}  isStudent={true}/>
   <Student name='sahil' age={20}  isStudent={true}/> */}
   {/* <UserGreeting isLogged={true} name='afsal'/> */}

   
   {/* <List items={fruits}  category='fruits'/>
   <List items={vegetable}  category='vegetable'/> */}

    {/* <Button/> */}

    {/* <MyComponent/> */}


    <UpdateObj/>
    <Footer/>
    </>
   
  );

}

export default App
