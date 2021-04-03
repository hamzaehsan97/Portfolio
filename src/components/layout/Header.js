import React from "react";
import "./Layout.css";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Header = () => {
  // eslint-disable-next-line
  const x = 1;
  return (
    <Grid container justify="flex-end">
      <Grid item>
        <ul id="nav">
          {" "}
          <li>
            <Link to="/cs" style={{ textDecoration: "none", color: "black" }}>
              <b>CS</b>
            </Link>
          </li>{" "}
        </ul>
      </Grid>
      <Grid item>
        <ul id="nav1">
          <li>
            <Link to="/life" style={{ textDecoration: "none", color: "black" }}>
              <b>Life</b>
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid item>
        <ul id="nav2">
          <li>
            <Link
              to="/resume"
              style={{ textDecoration: "none", color: "black" }}
            >
              <b>Resume</b>
            </Link>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};
