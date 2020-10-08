import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.getUsers().then(function ({ data }) {
      console.log(data);
      setUsers(
        data.results.map((user) => ({
          image: user.picture.medium,
          id: user.login.uuid,
          name: user.name.first + " " + user.name.last,
          email: user.email,
          phone: user.cell,
          date: user.dob.date,
        }))
      );
    });
  }, []);
  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />>
        <table>
          <thead>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birth Date</th>
          </thead>
          <tbody>
            {users.length !== 0 &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <img
                      src={user.image}
                      alt={user.name}
                      height="50px"
                      width="50px"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
