import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Column, FormBox } from "../common/index";

interface SearchProps {
  title: string;
  description: string;
}

const Search = ({ title, description }: SearchProps) => {
  return (
    <Column justifyContentDirection="flex-start" width="100%">
      <h2 style={{ margin: "10%" }}>{title} </h2>
      <h4>{description}</h4>
      <FormBox>
        <TextField label="enter character name" />
      </FormBox>
      <Box mt="5%">
        <Button variant="contained" component="button" size="large">
          Submit
        </Button>
      </Box>
    </Column>
  );
};

export default Search;
