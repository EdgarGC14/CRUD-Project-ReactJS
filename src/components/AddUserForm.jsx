import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        ref={register({
          required: { value: true, message: "Ingrese un nombre" },
        })}
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input type="text" name="username" placeholder="Username" />
      <div>{errors?.username?.message}</div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
