import React from "react";
import Layout from "@theme/Layout";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import BrushIcon from "@mui/icons-material/Brush";
import { green } from "@mui/material/colors";

export default function Contact() {
  return (
    <Layout title="Contact">
      <Box display="flex" justifyContent="center" alignItems="center">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://twitter.com/alittlefaun"
              target="_blank"
            >
              <ListItemIcon>
                <TwitterIcon sx={{ color: green[700] }} />
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://www.instagram.com/alittlefaun/"
              target="_blank"
            >
              <ListItemIcon>
                <InstagramIcon sx={{ color: green[700] }} />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://www.deviantart.com/alittlefaun"
              target="_blank"
            >
              <ListItemIcon>
                <BrushIcon sx={{ color: green[700] }} />
              </ListItemIcon>
              <ListItemText primary="Deviant Art" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Layout>
  );
}
