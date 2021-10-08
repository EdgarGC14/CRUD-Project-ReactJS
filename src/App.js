import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/UserTable.jsx";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Edgar", username: "EdgarGuCe14" },
    { id: uuidv4(), name: "Luis", username: "LuisEGC14" },
    { id: uuidv4(), name: "Allison", username: "AllisonNGC14" },
  ];

  //Satate
  const [users, setUsers] = useState(usersData);

  //Create New User
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
