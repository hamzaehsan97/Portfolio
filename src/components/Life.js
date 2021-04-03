import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Header } from "../components/layout/Header";
import { LifeTabs } from "../components/layout/LifeTabs";
import {
  UndrawTabs,
  UndrawDesigner,
  UndrawResponsive,
} from "react-undraw-illustrations";

class Life extends Component {
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
          <Grid
            container
            className="App"
            justify="flex-start"
            alignItems="center"
            direction="column"
          >
            <Grid item>
              <Typography variant="h2">What is Hamza upto?</Typography>
            </Grid>
            <Grid item style={{ marginTop: 6 + "em" }}>
              <LifeTabs />
            </Grid>
          </Grid>
        </div>{" "}
      </>
    );
  }
}

export default Life;
