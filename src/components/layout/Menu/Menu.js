import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const onMouseOver = (event) => {
    const el = event.target;
    let colorhex = ["#000000"];
    el.style.color = colorhex[0];
  };

  const onMouseOut = (event) => {
    const el = event.target;
    let white = "white";
    el.style.color = white;
  };
  const styles = {
    color: "white",
    fontSize: 1 + "em",
  };
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex}>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          style={styles}
        >
          0.{" "}
          <b
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={(event) => onMouseOver(event)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            {" "}
            About
          </b>
        </Typography>
      </Link>

      <Link to="/cs" tabIndex={tabIndex}>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          style={styles}
        >
          {" "}
          1.{" "}
          <b
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={(event) => onMouseOver(event)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            {" "}
            Coding
          </b>
        </Typography>
      </Link>

      <Link to="/life" tabIndex={tabIndex}>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          style={styles}
        >
          {" "}
          2.{" "}
          <b
            style={{
              textDecoration: "none",
              color: "white",
            }}
            onMouseEnter={(event) => onMouseOver(event)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Life
          </b>
        </Typography>
      </Link>
      <a href="https://texties.netlify.app/" tabIndex={tabIndex}>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          style={styles}
        >
          3.{" "}
          <b
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={(event) => onMouseOver(event)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Texties
          </b>
        </Typography>
      </a>
      {/* <Link to="/resume" tabIndex={tabIndex}> */}
      <a href="resume.pdf">
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          style={styles}
        >
          4.{" "}
          <b
            style={{ textDecoration: "none", color: "white" }}
            onMouseEnter={(event) => onMouseOver(event)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Resume
          </b>
        </Typography>
      </a>
      {/* </Link> */}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
