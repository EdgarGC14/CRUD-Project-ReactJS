import React from "react";

import { Typography } from "@material-ui/core";

const Label = (props) => {
  return (
    <Typography variant="h5" color="secondary">
      {props.text}
    </Typography>
  );
};

export default Label;
