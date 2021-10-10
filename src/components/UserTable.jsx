import React from "react";
import Button from "./ui/Button";
import TableHeaders from "./ui/TableHeaders";

const UserTable = (props) => {
  //console.log(props.users);
  return (
    <table>
      <thead>
        <tr>
          <th>
            <TableHeaders text="Name" />
          </th>
          <th>
            <TableHeaders text="Username" />
          </th>
          <th>
            <TableHeaders text="Actions" />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => props.editRow(user)}
                >
                  Edit
                </button>
                <Button className="button muted-button" text="Edit" />
                <button
                  className="button muted-button"
                  onClick={() => {
                    props.deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
                <Button className="button muted-button" text="Delete" />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
