import React from "react";
import Layout from "@theme/Layout";
import Avatar from "../../static/images/alittlefaun.png";
import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Layout title="About">
      <Grid container spacing={1} sx={{ px: "10vw" }}>
        <Grid item xs={6} md={8}>
          <Typography variant="h3">About me</Typography>
          <Typography paragraph="true" variant="b1">
            I'm alittlefaun and am a small plush maker during the weekends! I
            really enjoy plush making because I can really flex my love of
            creation as well as create a bit more happiness into the world by
            bringing people's characters to life through plushies.
          </Typography>
          <Typography paragraph="true" variant="b1">
            Other things that I enjoy during my free time are cooking, watching
            anime, and a bit of light gaming. Some of my favorites include: Made
            in Abyss, Shield Hero, That Time I Got Reincarnated as a Slime, and
            Natsume's Book of Friends.
          </Typography>
          <Typography paragraph="true" variant="b1">
            If you have any questions, definitely feel free to reach out! I'd
            like to think I'm a pretty friendly and open person so don't worry!
            (´・ω・｀)
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box component="img" src={Avatar}></Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
