import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  console.log(props.currentUser);

  const { register, errors, handleSubmit } = useForm({
    defaultValues: { id: 23452, name: "Hola", username: "mundo" },
  });

  const onSubmit = (data, e) => {
    console.log(data);

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
        /*ref={register({
          required: { value: true, message: "Campo requerido" },
        })}*/
      />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input type="text" name="username" placeholder="Username" />
      <div>{errors?.username?.message}</div>
      <button>Save Changes</button>
    </form>
  );
};

export default EditUserForm;
