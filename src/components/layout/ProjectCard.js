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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const ProjectCard = (props) => {
  // eslint-disable-next-line
  const useStyles = makeStyles({
    root: {
      minWidth: 400,
      maxWidth: 400,
      minHeight: 200,
      maxHeight: 200,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(1)",
    },
    title: {
      fontSize: 20,
      fontWeight: "bolder",
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
      {/* Container for Projects */}
      <Card className={classes.root} variant="outlined" id="1">
        <CardHeader title={props.project.name}></CardHeader>
        <CardContent>
          <Typography variant="body2" component="p">
            {props.project.description}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Link to={props.project.url}> */}
          <Button target="_blank" href={props.project.url}>
            Open Project
          </Button>
          {/* </Link> */}
        </CardActions>
      </Card>
    </div>
  );
};
