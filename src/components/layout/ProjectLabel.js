import React from "react";
import "./Layout.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core/";
import { CardHeader } from "@material-ui/core";
import { typography } from "@material-ui/system";
import { white } from "color-name";

export const ProjectLabel = () => {
  // eslint-disable-next-line
  const useStyles = makeStyles({
    root: {
      minWidth: 300,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(1)",
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const myTheme = {
    cardHeaderStylePref: {
      background: "linear-gradient(to right bottom, #430089, #82ffa1)",
      color: "red",
      height: 30,
      padding: 0,
    },
  };
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      {/* Label for Projects */}
      <Grid
        container
        className="projectsTitle"
        justify="flex-start"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <h1 id="projectTitle">Projects</h1>
        </Grid>
      </Grid>
    </div>
  );
};
