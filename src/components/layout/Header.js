import React from "react";
import "./Layout.css";
import { Grid } from "@material-ui/core";

export const Header = () => {
  // eslint-disable-next-line
  const x = 1;
  return (
    <Grid container justify="flex-end">
      <Grid item>
        <ul id="nav">
          {" "}
          <li>
            <b>CS</b>
          </li>{" "}
        </ul>
      </Grid>
      <Grid item>
        <ul id="nav1">
          <li>
            <b>Phil</b>
          </li>
        </ul>
      </Grid>
      <Grid item>
        <ul id="nav2">
          <li>
            <b>Resume</b>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};
