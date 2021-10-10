import React from "react";
import { render } from "react-dom";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const TableHeaders = (props) => {
  return (
    <p align="center" bgcolor="#444444">
      {props.text}
    </p>
  );
};

export default TableHeaders;
