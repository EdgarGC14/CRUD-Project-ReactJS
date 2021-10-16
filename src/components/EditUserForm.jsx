import React, { useState } from "react";
import Label from "./ui/Label";
import { Button, Icon } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";

const EditUserForm = (props) => {
  console.log("Current User :: " + props.currentUser.username);

  //Declaracion States
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const editUserFnct = () => {
    console.log("Username Edited :: " + username);
    console.log("Name Edited :: " + name);
    props.updateUser(props.currentUser.id, { name: name, username: username });
    props.currentUser.username = username;
  };

  return (
    <ThemeProvider theme={theme}>
      <Label text="Name" />
      <input
        type="text"
        name="nameInput"
        placeholder={props.currentUser.name}
        required={true}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Label text="Username" />
      <input
        type="text"
        name="usernameInput"
        placeholder={props.currentUser.username}
        required={true}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <div align="center">
        <Button
          variant="contained"
          color="primary"
          size="small"
          endIcon={<Icon>save</Icon>}
          onClick={() => editUserFnct()}
        >
          Save Changes
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default EditUserForm;
