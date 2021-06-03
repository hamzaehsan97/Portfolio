import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Header } from "../components/layout/Header";
import {
  UndrawTabs,
  UndrawDesigner,
  UndrawResponsive,
} from "react-undraw-illustrations";
import styled from "styled-components";
import "./layout/Layout.css";
const styles = {
  paddingTop: 5 + "%",
  "@media (max-width: ${({ theme }) => theme.mobile})": {
    paddingTop: 15 + "% !important",
  },
};
class Cs extends Component {
  render() {
    return (
      <>
        {" "}
        <div className="content" style={styles}>
          <Grid
            container
            className="App"
            justify="flex-end"
            alignItems="flex-start"
            direction="row"
          >
            <Header />
          </Grid>
          <Grid direction="column" alignItems="center" justify="center">
            <Grid
              container
              className="App"
              justify="flex-start"
              alignItems="center"
              direction="column"
            >
              <Grid item xs={8}>
                <Grid direction="row">
                  <Grid item>
                    <Typography variant="h1">Computer Science</Typography>
                  </Grid>
                  <Grid item>
                    <UndrawDesigner
                      hairColor="black"
                      skinColor="#C68642"
                      height="100px"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h2"> Coursework </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid item>
                  <ul>
                    <li>Intermidiate Programming</li>
                    <li>Web Client Programming</li>
                    <li>Data-Scientific Programming</li>
                    <li>Machine Learning</li>
                    <li>Scientific Programming</li>
                  </ul>
                </Grid>
                <Grid item>
                  <ul>
                    <li>Introduction to Data Structures</li>
                    <li>Computer Graphics</li>
                    <li>System Programming</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Theory of Computation</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography variant="h2">Press</Typography>
                </Grid>
                <Grid item>
                  <a href="https://www.uml.edu/innovation-entrepreneurship/differencemaker/meet-the-differencemakers/ev-smart.aspx">
                    <Typography>
                      {" "}
                      Press: University Massachusetts Differencemaker
                      Competition{" "}
                    </Typography>
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://blogs.lawrence.edu/news/2019/04/lawrence-student-finishes-a-strong-second-in-third-annual-pitch-competition.html">
                    <Typography>
                      {" "}
                      Press: The Pitch Competition, Green Bay{" "}
                    </Typography>
                  </a>
                  {/* <UndrawDesigner hairColor="black" skinColor="#C68642" /> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>{" "}
      </>
    );
  }
}

export default Cs;
