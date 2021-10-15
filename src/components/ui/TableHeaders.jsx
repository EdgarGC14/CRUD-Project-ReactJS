import React from "react";
import { Typography } from "@material-ui/core/";
//import { render } from "react-dom";
//import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const TableHeaders = (props) => {
  return (
    <Typography variant="body" color="secondary" align="center">
      {props.text}
    </Typography>
  );
};

export default TableHeaders;
