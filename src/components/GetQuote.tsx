import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Column, FormBox } from "../common/index";

const GetQuote = () => {
  return (
    <Column justifyContentDirection="flex-start" width="100%">
      <h2 style={{ margin: "10%" }}>Get quote by character </h2>
      <h4>enter the name of your favorite anime/manga character</h4>
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

export default GetQuote;
