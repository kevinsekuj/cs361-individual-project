import React from "react";
import { Stack, StackProps } from "@mui/material";

interface SidebarProps extends StackProps {
  spacing?: number;
}

const Sidebar = ({ children, spacing, ...rest }: SidebarProps) => (
  <Stack
    spacing={spacing}
    direction="column"
    justifyContent="flex-start"
    {...rest}
  >
    {children}
  </Stack>
);

export default Sidebar;
