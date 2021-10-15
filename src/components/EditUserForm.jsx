import React from "react";
import { useForm } from "react-hook-form";
//import Button from "./ui/Button";
import Label from "./ui/Label";
import { Button, Icon } from "@material-ui/core";

const EditUserForm = (props) => {
  console.log("Current User :: " + props.currentUser.username);

  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    //console.log(data);
    data.id = props.currentUser.id;

    props.updateUser(props.currentUser.id, data);

    //clear fields
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label text="Name" />
      <input
        type="text"
        name="name"
        placeholder="Name"
        required={true}
        {...register("name", { required: "Campo requerido" })}
        /*ref={register({
          required: { value: true, message: "Campo requerido" },
        })}*/
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
    </form>
  );
};

export default EditUserForm;
