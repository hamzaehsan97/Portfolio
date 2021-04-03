import React from "react";
import "./Layout.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core/";

export const Biking = (props) => {
  // eslint-disable-next-line
  const useStyles = makeStyles({
    root: {
      minWidth: 400,
      maxWidth: 400,
      minHeight: 200,
      maxHeight: 200,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(1)",
    },
    title: {
      fontSize: 20,
      fontWeight: "bolder",
    },
    pos: {
      marginBottom: 12,
    },
  });
  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item>
        <Typography
          variant="h4"
          style={{ fontWeight: 300, marginTop: 1 + "em" }}
        >
          Here are some of my latest bike rides
        </Typography>
      </Grid>
      <Grid item>
        <iframe
          style={{ marginTop: 2 + "em" }}
          height="454"
          width="300"
          frameborder="0"
          allowtransparency="true"
          scrolling="no"
          src="https://www.strava.com/athletes/81906180/latest-rides/3550008df1f5fa43e9d6b42ce2359204d6103f49"
        ></iframe>
      </Grid>
    </Grid>
  );
};
