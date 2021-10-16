import React, { useState } from "react";
import { useForm } from "react-hook-form";
//import Button from "./ui/Button";
import Label from "./ui/Label";

import { Button, Icon, Typography } from "@material-ui/core/";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";
//import DeleteIcon from "@material-ui/icons/Delete";

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
  const { register, errors, handleSubmit } = useForm();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const setUsernameValue = (e) => {
    setUsername(e.target.value);
    props.addUser({ id: "", name: { username }, username: { username } });
  };

  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <Label text="Name" />
      <input
        type="text"
        name="nameInput"
        required={true}
        onChange={(e) => setName(e.target.value)}
      />
      <Label text="Username" />
      <input
        type="text"
        name="usernameInput"
        required={true}
        onChange={(e) => setUsernameValue()}
      />

      <div align="center">
        <Button
          className={classes.myClassName}
          onClick={() => {
            console.log("Username :: " + username);
            console.log("Name :: " + name);
          }}
          endIcon={<Icon>save</Icon>}
        >
          Add New User
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default AddUserForm;
