import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // We fetch the data
        const response = await fetch("http://localhost:3001/");
        const data = await response.json();
        // We set the data into the users const
        setUsers(data.users);
      } catch (error) {
        console.error("Something go wrong.", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Hello dev.com 👋!</h1>
      <h2>This is a simple tutorial about fetching data from nodejs.</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.lastname}>
              {user.name} {user.lastname}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
