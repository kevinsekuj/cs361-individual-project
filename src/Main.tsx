import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ApplicationRouter from "./ApplicationRouter";

import { Sidebar, Column, MediaCard, Text } from "./common/index";
import { NewsDialog } from "./components";
import {
  SIDEBAR_BUTTONS,
  FONT_FAMILY,
  LI_FONT_SIZE,
  MEDIA_CARDS,
} from "./common/constants";

import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import useWindowSize from "./hooks/useWindowSize";

const Home = () => {
  const size = useWindowSize();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Grid container spacing={2} minHeight="80%" width="70%">
        <Grid xs={3}>
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
            </Sidebar>
          </Column>
        </Grid>

        <Grid item lg={9} xl={6}>
          <Column
            justifyContentDirection="flex-start"
            alignItemsDirection="flex-start"
          >
            <ApplicationRouter />
          </Column>
        </Grid>

        {size.width > 1536 && (
          <Grid item xl={3}>
            <Column justifyContentDirection="space-evenly">
              <Box display="flex" flexDirection="column" alignItems="center">
                <h2 style={{ textAlign: "center" }}> News </h2>
                <NewsDialog />
                <Text fontSize=".9em">Note: filtering may reload news</Text>
              </Box>
              {MEDIA_CARDS.map(card => (
                <MediaCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  url={card.url}
                />
              ))}
            </Column>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Home;
