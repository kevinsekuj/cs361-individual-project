import React from "react";
import { Box, BoxProps } from "@mui/material";

interface ColumnProps extends BoxProps {
  alignItemsDirection?: string;
  justifyContentDirection?: string;
}

const Column = ({
  children,
  alignItemsDirection = "center",
  justifyContentDirection = "center",
  ...rest
}: ColumnProps) => (
  <Box
    sx={{ backgroundColor: "hsla(222deg 20% 9%)" }}
    color="whitesmoke"
    height="100%"
    display="flex"
    flexDirection="column"
    alignItems={alignItemsDirection}
    justifyContent={justifyContentDirection}
    {...rest}
  >
    {children}
  </Box>
);

export default Column;
