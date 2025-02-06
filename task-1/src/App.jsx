import Person from './Person'


function App() {
 
    const peopleData = [
    { id: 1, name: "Afsal", email: "afsal@gmail.com" },
    { id: 2, name: "Bob", email: "bob@gmail.com" },
    { id: 3, name: "Charlie", email: "charlie@gmail.com" },
];

  return (
    <>
      <Person detail={peopleData}/>
       
    </>
  )
}

export default App
