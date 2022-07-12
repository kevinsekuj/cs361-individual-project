import React, { useState } from "react";
import { Search } from "../common/index";
import { Modal, Typography, Box, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "15%",
  width: "25%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const GetImage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Search
      title="Get image by character name"
      description="enter the name of your favorite anime/manga character"
    >
      <Box m="2%">
        <Button variant="contained" component="button" size="large">
          Submit
        </Button>
      </Box>
      <Box>
        <Button variant="outlined" onClick={handleOpen}>
          HELP
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              Tutorial
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <ol>
                <li>Choose the anime/manga character you want to search for</li>
                <li>
                  Enter their name in the search bar - proper spelling will
                  yield the best results
                </li>
                <li>
                  Click the search button and our servers will find an image for
                  you
                </li>
              </ol>
            </Typography>
            <Button variant="contained" color="warning" onClick={handleClose}>
              Skip tutorial
            </Button>
          </Box>
        </Modal>
      </Box>
    </Search>
  );
};

export default GetImage;
