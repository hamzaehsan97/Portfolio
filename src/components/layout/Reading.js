import React from "react";
import "./Layout.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core/";

export const Reading = (props) => {
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
          I am currently reading:
        </Typography>
        <ul style={{ marginTop: 1 + "em" }}>
          <li>Radical Candor</li>
        </ul>
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          style={{ fontWeight: 300, marginTop: 3 + "em" }}
        >
          Older reads that I can vouch for
        </Typography>
        <ul style={{ marginTop: 1 + "em" }}>
          <li>
            <Typography variant="body1">
              The 7 Habits of Highly Effective People
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Soonish: Ten Emerging Technologies
            </Typography>
          </li>
          <li>
            <Typography variant="body1">Zero To One</Typography>
          </li>
          <li>
            <Typography variant="body1">The Lean Startup</Typography>
          </li>
          <li>
            <Typography variant="body1">
              The Airbnb Story: How Three Ordinary Guys
            </Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};
