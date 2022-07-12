import React, { useState } from "react";
import { Search, Column, Text } from "../common/index";
import { Button, CircularProgress } from "@mui/material";

const GetQuote = () => {
  const [searchResult, setSearchResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setSearchResult("Rejection makes a man stronger - Jiraiya");
    await new Promise(r => setTimeout(r, 2000));

    setIsLoading(false);
  };

  const handleReset = () => setSearchResult("");

  return (
    <>
      {(() => {
        if (isLoading) {
          return (
            <Column width="100%" height="60%">
              <CircularProgress />
            </Column>
          );
        }
        if (searchResult) {
          return (
            <Column width="100%" height="40%">
              <Text fontSize="1.5em">{searchResult}</Text>
              <Button variant="contained" onClick={handleReset}>
                Search again
              </Button>
            </Column>
          );
        }
        return (
          <Search
            title="Get quote by character"
            description="enter the name of your favorite anime/manga character"
          >
            <Button variant="contained" onClick={handleClick}>
              Submit
            </Button>
          </Search>
        );
      })()}
    </>
  );
};

export default GetQuote;
