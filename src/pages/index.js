import React from "react";
import Layout from "@theme/Layout";
import { ImageList, ImageListItem, Typography } from "@mui/material";

export default function Home() {
  const images = importAll(
    require.context("../../static/images/plushes", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Layout title="Home">
      <Typography align="center" variant="h3" sx={{ pt: 4 }}>
        Hello there! 🌱
      </Typography>
      <Typography paragraph="true" variant="body1" sx={{ mx: "10vw", pt: 4 }}>
        I'm alittlefaun - you can call me faun (〃ω〃). I edit text files during
        the week for a living and make plushies during the weekends. I really
        enjoy the process of creating things and having that final product bring
        joy to their owners.
      </Typography>
      <Typography paragraph="true" variant="body1" sx={{ mx: "10vw", pd: 4 }}>
        Please don't hesitate to message me if you have a character that you
        would like me to bring to life!
      </Typography>
      <ImageList
        sx={{ width: "auto", height: "auto", mx: "10vw" }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {Object.entries(images).map(([key, _]) => (
          <ImageListItem key={key}>
            <img
              src={
                require(`../../static/images/plushes/${key}?w=161&fit=crop&auto=format`)
                  .default
              }
              srcSet={
                require(`../../static/images/plushes/${key}?w=161&fit=crop&auto=format`)
                  .default
              }
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Layout>
  );
}

function importAll(r) {
  let images = {};
  r.keys().map((item, _) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
