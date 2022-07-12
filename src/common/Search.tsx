import React, { useState } from "react";
import { Box, TextField, Alert } from "@mui/material";
import { Column, FormBox } from "../common/index";

interface SearchProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Search = ({ title, description, children }: SearchProps) => {
  const [userTextInput, setUserTextInput] = useState("");
  const [autoCorrectAlertVisible, setAutoCorrectAlertVisible] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTextInput(e.target.value);

    if (
      ["shinob", "shinub", "shino", "shinu"].includes(
        userTextInput.toLowerCase()
      )
    ) {
      setAutoCorrectAlertVisible(true);
    } else {
      if (autoCorrectAlertVisible) setAutoCorrectAlertVisible(false);
    }
  };

  return (
    <Column justifyContentDirection="flex-start" width="100%">
      <h2 style={{ margin: "10%" }}>{title} </h2>
      <h4>{description}</h4>
      <FormBox>
        <TextField onChange={handleOnChange} label="enter character name" />
      </FormBox>
      {autoCorrectAlertVisible && (
        <Alert severity="info">{`Do you mean "Shinobu"?`}</Alert>
      )}
      <Box mt="1%"></Box>
      {children}
    </Column>
  );
};

export default Search;
