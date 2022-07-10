import React from "react";
import { Column, Text, FormBox } from "../common";
import { Box, TextField, Button, Stack } from "@mui/material";
import styled from "@mui/styled-engine";

const Input = styled("input")({
  display: "none",
});

const ReverseImageSearch = () => {
  return (
    <Column justifyContentDirection="flex-start" width="100%">
      <h2 style={{ margin: "10%" }}>Upload image </h2>
      <h3>Search by URL</h3>
      <FormBox>
        <TextField label="paste url" />
      </FormBox>
      <Box sx={{ textAlign: "center" }}>
        <Text fontSize="1.1em" bold>
          - or -
        </Text>
      </Box>
      <h3>Search by file upload </h3>
      <Stack alignItems="center" spacing={3} mt="1%">
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="outlined" component="span">
            Upload
          </Button>
        </label>
        <Text fontSize={"1em"} style={{ marginTop: "5%" }}>
          Upload files here
        </Text>
      </Stack>
      <Box mt="10%">
        <Button variant="contained" component="button" size="large">
          Submit
        </Button>
      </Box>
    </Column>
  );
};

export default ReverseImageSearch;
