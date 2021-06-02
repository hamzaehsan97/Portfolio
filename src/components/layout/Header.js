import React from "react";
import "./Layout.css";
import { Grid, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const onMouseOver = (event) => {
  const el = event.target;
  let colorhex = ["#3EB489"];
  el.style.color = colorhex[0];
};

const onMouseOut = (event) => {
  const el = event.target;
  let black = "#000000";
  el.style.color = black;
};

export const Header = () => {
  // eslint-disable-next-line
  const styles = {
    fontSize: 22 + "px",
    "@media (max-width: 500px)": {
      display: "none",
    },
  };

  return (
    <Grid container direction="row" justify="flex-end">
      <Grid item>
        <ul id="nav">
          {" "}
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "#3EB489" }}>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                style={styles}
              >
                0.{" "}
                <b
                  style={{ textDecoration: "none", color: "black" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  {" "}
                  About
                </b>
              </Typography>
            </Link>
          </li>{" "}
        </ul>
      </Grid>
      <Grid item>
        <ul id="nav">
          {" "}
          <li>
            <Link to="/cs" style={{ textDecoration: "none", color: "#3EB489" }}>
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                style={styles}
              >
                {" "}
                01.{" "}
                <b
                  style={{ textDecoration: "none", color: "black" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  {" "}
                  Coding
                </b>
              </Typography>
            </Link>
          </li>{" "}
        </ul>
      </Grid>
      <Grid item>
        <ul id="nav1">
          <li>
            <Link
              to="/life"
              style={{
                textDecoration: "none",
                color: "#3EB489",
              }}
            >
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                style={styles}
              >
                {" "}
                02.{" "}
                <b
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Life
                </b>
              </Typography>
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid item>
        <ul id="nav2">
          <li>
            <Link
              to="/resume"
              style={{
                textDecoration: "none",
                color: "#3EB489",
              }}
            >
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                style={styles}
              >
                03.{" "}
                <b
                  style={{ textDecoration: "none", color: "black" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Resume
                </b>
              </Typography>
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};
