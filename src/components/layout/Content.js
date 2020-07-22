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
    <div className="content">
      <Bounce>
        <h1 id="greeting">Hamza Ehsan</h1>
      </Bounce>
      <p className="bio">
        <TextLoop className="greeting">
          <span>Hello,</span>
          <span>Hola,</span>
          <span>Salam,</span>
          <span>Bonjour,</span>
          <span>Namaste,</span>
        </TextLoop>{" "}
        I am a senior at Lawrence University where I enjoy
        learning about Computer Science and Philosophy. I am advised by{" "}
        <b>Joe Gregg</b> and <b>Mark Phelan</b>.
      </p>
      <p className="bio">
        <Link
          activeClass="active"
          to="projectTitle"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <u>Scroll down</u>
        </Link>{" "}
        to see some of the projects I've been working on.
      </p>
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
    </div>
  );
};
