import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import UserTable from "./components/UserTable.jsx";
import { createUseStyles } from "react-jss";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/themeConfig";
import Typography from "@material-ui/core/Typography";

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

  //Update Users
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  //Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Typography variant="h3" color="secondary" align="center" paragraph>
          CRUD App with Hooks
        </Typography>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <div>
                <Typography variant="h4" color="primary" align="center">
                  Edit user
                </Typography>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <Typography variant="h4" color="primary" align="center">
                  Add user
                </Typography>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          <div className="flex-large">
            <Typography variant="h4" color="primary" align="center">
              View users
            </Typography>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
