  

  function UserGreeting(props){
    
        if(props.isLogged){
            return <p>Welcome {props.name}</p>
        }else{
            return <p>please logged in</p>
        }
     
  }

  export default UserGreeting