import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ApplicationRouter from "./ApplicationRouter";
import { Sidebar, Column, MediaCard } from "./common/index";
import { SIDEBAR_BUTTONS, FONT_FAMILY, LI_FONT_SIZE } from "./common/constants";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Grid container spacing={2} minHeight="80%" width="70%">
        <Grid item xs={3}>
          <Column
            alignItemsDirection="flex-start"
            justifyContentDirection="flex-start"
          >
            <Sidebar width="100%" mt="15%">
              <List>
                {SIDEBAR_BUTTONS.map(button => (
                  <RouterLink
                    key={button.content}
                    to={button.path ? button.path : "/"}
                  >
                    <ListItem>
                      <ListItemButton sx={{ borderBottom: "1px solid grey" }}>
                        <ListItemIcon>{button.icon}</ListItemIcon>
                        <ListItemText
                          primary={button.content}
                          primaryTypographyProps={{
                            fontFamily: FONT_FAMILY,
                            fontSize: LI_FONT_SIZE,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </RouterLink>
                ))}
              </List>
              <Column mt="10%">
                <h2> Stuff </h2>
                <MediaCard />
              </Column>
            </Sidebar>
          </Column>
        </Grid>

        <Grid item xs={6}>
          <Column
            justifyContentDirection="flex-start"
            alignItemsDirection="flex-start"
          >
            <ApplicationRouter />
          </Column>
        </Grid>

        <Grid item xs={3}>
          <Column justifyContentDirection="flex-start">
            <h2> News </h2>
            {[...Array(2)].map((el, i) => (
              <MediaCard key={i} />
            ))}
          </Column>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
