import React, { useState } from "react";
import { useForm } from "react-hook-form";
//import Button from "./ui/Button";
import Label from "./ui/Label";
import { Button, Icon } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";

const EditUserForm = (props) => {
  console.log("Current User :: " + props.currentUser.username);

  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Label text="Name" />
      <Label text="Name" />
      <input
        type="text"
        name="usernameInput"
        required={true}
        onChange={(e) => {
          setUsername(e.target.value);
          e.target.reset();
        }}
      />
      <Label text="Username" />
      <input
        type="text"
        name="nameInput"
        required={true}
        onChange={(e) => {
          setName(e.target.value);
          e.target.reset();
        }}
      />
      <div align="center">
        <Button
          variant="contained"
          color="primary"
          size="small"
          endIcon={<Icon>save</Icon>}
        >
          Save Changes
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default EditUserForm;
