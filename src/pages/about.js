import React from "react";
import Layout from "@theme/Layout";
import Avatar from "../../static/images/alittlefaun.png";
import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Layout title="About">
      <Grid container spacing={2} sx={{ px: "10vw", py: 4 }}>
        <Grid item xs={6} md={8}>
          <Typography variant="h3" sx={{ pb: 4 }}>
            About me
          </Typography>
          <Typography paragraph="true" variant="body1">
            I'm alittlefaun and am a small plush maker during the weekends! I
            really enjoy plush making because I can really flex my love of{" "}
            <b>creation</b> as well as create a bit more <b>happiness</b> into
            the world by bringing people's characters to life through plushies.
          </Typography>
          <Typography paragraph="true" variant="body1">
            Other things that I enjoy during my free time are cooking, watching{" "}
            <b>anime</b>, and a bit of light gaming. Some of my favorites
            include: Made in Abyss, Shield Hero, That Time I Got Reincarnated as
            a Slime, and Natsume's Book of Friends.
          </Typography>
          <Typography paragraph="true" variant="body1">
            If you have any questions, definitely feel free to reach out! I'd
            like to think I'm a pretty <b>friendly</b> and open person so don't
            worry! (´・ω・｀)
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box component="img" src={Avatar}></Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
