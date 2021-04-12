import React from "react";
import TextLoop from "react-text-loop";
import { Grid } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

export const Content = () => {
  const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`};
  `;
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <p className="bio">
            <TextLoop className="greeting" style={{ color: "#3EB489" }}>
              <span style={{ color: "#3EB489" }}> Hello,</span>
              <span style={{ color: "#3EB489" }}> Hola,</span>
              <span style={{ color: "#3EB489" }}> Salam,</span>
              <span style={{ color: "#3EB489" }}> Bonjour,</span>
              <span style={{ color: "#3EB489" }}>
                0110100001100101011011000110110001101111,
              </span>
            </TextLoop>{" "}
            my name is{" "}
          </p>
        </Grid>
        <Grid item className="bounce">
          <Bounce>
            <h1 id="greeting">
              Hamza Ehsan.
              <br />I build things for the web.
            </h1>
          </Bounce>
        </Grid>
        <Grid item>
          <p className="bio">
            <p>
              I'm a <b style={{ color: "#3EB489" }}>Chicago-based</b> software
              engineer who specializes in building <br /> exceptional web
              applications. Currently, I'm a full-stack engineer
              <br /> at <b style={{ color: "#3EB489" }}>Weidert Group</b>{" "}
              focused on building data centric, growth driven
              <br /> web apps.
              <br />
            </p>
            <Link
              activeClass="active"
              to="projectTitle"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <u
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#3EB489",
                }}
              >
                Scroll down
              </u>
            </Link>{" "}
            to see some of the projects I've been working on.
          </p>
        </Grid>
        <Grid item>
          <p>
            <span id="icons">
              <SocialIcon url="https://github.com/hamzaehsan97" />
            </span>
            <span id="icons">
              <SocialIcon url="https://www.linkedin.com/in/hamza-ehsan-56937113b/" />
            </span>
            <span id="icons">
              <SocialIcon url="https://twitter.com/MelarkeyWisdom" />
            </span>

            <span id="icons">
              <SocialIcon url="https://medium.com/@hamzaehsan75" />
            </span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
