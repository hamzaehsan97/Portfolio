import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Header } from "../components/layout/Header";
import {
  UndrawTabs,
  UndrawDesigner,
  UndrawResponsive,
} from "react-undraw-illustrations";

class Cs extends Component {
  render() {
    return (
      <>
        {" "}
        <div>
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
              <Grid item>
                <a>
                  https://www.uml.edu/innovation-entrepreneurship/differencemaker/meet-the-differencemakers/ev-smart.aspx
                </a>
                <a>
                  https://blogs.lawrence.edu/news/2019/04/lawrence-student-finishes-a-strong-second-in-third-annual-pitch-competition.html
                </a>
              </Grid>
              <Grid item>
                <UndrawDesigner hairColor="black" skinColor="#C68642" />
              </Grid>
            </Grid>
          </Grid>
        </div>{" "}
      </>
    );
  }
}

export default Cs;
