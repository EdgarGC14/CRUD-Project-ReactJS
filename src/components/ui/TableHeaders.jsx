import React from "react";
import { Typography } from "@material-ui/core/";

const TableHeaders = (props) => {
  return (
    <Typography variant="h6" color="secondary" align="center">
      {props.text}
    </Typography>
  );
};

export default TableHeaders;
