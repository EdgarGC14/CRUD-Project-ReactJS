import React from "react";
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

  const onSubmit = (data, e) => {
    //console.log(data);

    props.addUser(data);
    //clear fields
    e.target.reset();
  };

  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label text="Name" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          required={true}
          {...register("name", { required: "Campo requerido" })}
        />
        <div>{errors?.name?.message}</div>
        <Label text="Username" />
        <input
          type="text"
          name="username"
          placeholder="Username"
          required={true}
          {...register("username", { required: "Campo requerido" })}
        />
        <div>{errors?.username?.message}</div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          endIcon={<Icon>save</Icon>}
          disableElevation
        >
          Add New User
        </Button>
        <Typography variant="h4" color="primary" align="center">
          Lorem Ipsum
        </Typography>
        <Button className={classes.myClassName}>Boton</Button>
      </form>
    </ThemeProvider>
  );
};

export default AddUserForm;
