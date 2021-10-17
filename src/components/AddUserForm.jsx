import React, { useState } from "react";
import Label from "./ui/Label";
//import Alert from "react-native/Alert";
import swal from "sweetalert";

import { Button, Icon } from "@material-ui/core/";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";

const useStyle = makeStyles({
  myClassName: {
    background: "#444444",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5 px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    width: 190,
    padding: "0 30px",
  },
});

const AddUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const addNewUserFnct = (e) => {
    console.log("Username :: " + username);
    console.log("Name :: " + name);
    name !== "" && username !== ""
      ? props.addUser({
          id: "",
          name: name,
          username: username,
        })
      : swal({
          title: "Error!",
          text: "Name and Username Required",
          icon: "warning",
          button: "Aceptar",
        });
  };

  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <Label text="Name" />
      <input
        type="text"
        name="nameInput"
        onChange={(e) => setName(e.target.value)}
      />
      <Label text="Username" />
      <input
        type="text"
        name="usernameInput"
        onChange={(e) => setUsername(e.target.value)}
      />

      <div align="center">
        <Button
          className={classes.myClassName}
          onClick={() => addNewUserFnct()}
          endIcon={<Icon>save</Icon>}
        >
          Add New User
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default AddUserForm;
