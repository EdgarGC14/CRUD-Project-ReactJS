import React from "react";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import Label from "./ui/Label";

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    //console.log(data);

    props.addUser(data);
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
      <Button text="Add New User" />
    </form>
  );
};

export default AddUserForm;
