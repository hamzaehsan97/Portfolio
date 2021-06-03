import React from "react";
import "./Layout.css";
import { Grid, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
///
import { theme } from "./theme";

import { GlobalStyles } from "../../global";
import { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { Menu } from "./Menu";
import { Burger } from "./Burger";
import FocusLock from "react-focus-lock";

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
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  const styles = {
    fontSize: 22 + "px",
    "@media (max-width: 500px)": {
      display: "none",
    },
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      style={{ display: "block" }}
    >
      {/* <Grid item>
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
      </Grid> */}
      <Grid item xs={1}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger
                open={open}
                setOpen={setOpen}
                aria-controls={menuId}
                id="burger"
              />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};
