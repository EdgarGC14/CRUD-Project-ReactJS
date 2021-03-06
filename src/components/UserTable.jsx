import React from "react";
import TableHeaders from "./ui/TableHeaders";
import { Button, Icon } from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";

const UserTable = (props) => {
  //console.log(props.users);
  return (
    <ThemeProvider theme={theme}>
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
                  <div align="center">
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      endIcon={<Icon>edit</Icon>}
                      onClick={() => props.editRow(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      endIcon={<Icon>deleteforever</Icon>}
                      onClick={() => props.deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </div>
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
    </ThemeProvider>
  );
};

export default UserTable;
