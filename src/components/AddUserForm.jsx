import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    props.addUser(data);
    //clear fields
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required={true}
        {...register("name", { required: "Campo requerido" })}
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        required={true}
        {...register("username", { required: "Campo requerido" })}
      />
      <div>{errors?.username?.message}</div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
