import React, { useState, useEffect } from "react";
import './App.css'
function Counter() {
  const [count, setCount] = useState(1);
  const [userInfo, setUserInfo] = useState(null);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => (c > 1 ? c - 1 : 1)); 
  }

  useEffect(() => {
    setUserInfo(null); 
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );

        if (!response.ok) {
            throw new Error("User not found!");
        }
        const data = await response.json();
        setUserInfo(data);
      } catch {
        setUserInfo({ name: "Error: Unable to load data", email: "NIL"  });
      }
    }

    fetchUser();
  }, [count]);

  return (
    <div className="counter-container">
      <h3 className="count">{count}</h3>
      <button className="counter-button" onClick={increment}>+</button>
      <button className="counter-button" onClick={decrement}>-</button>

      <div className="user-info-container">
        {!userInfo ? (
          <p className="loading">Loading user data...</p>
        ) : (
          <div className="user-info">
            <h3 className="user-name">{`User: ${userInfo.name}`}</h3>
            <p className="user-email">{`Email: ${userInfo.email}`}</p>
           </div>
        )}
      </div>
    </div>
  );
}

export default Counter;
