import React from "react";
import { Box } from "@mui/material";
import { BoxProps } from "@mui/system";

const FormBox = ({ children }: BoxProps) => (
  <Box
    component="form"
    sx={{
      "& > :not(style)": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  >
    {children}
  </Box>
);

export default FormBox;
