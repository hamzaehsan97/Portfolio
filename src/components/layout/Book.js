import React from "react";
import "./Layout.css";
import { emphasize, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Grid } from "@material-ui/core/";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { BlobProvider } from "@react-pdf/renderer";

export const Book = (props) => {
  // eslint-disable-next-line
  const useStyles = makeStyles({
    root: {
      marginTop: 1 + "px",
      marginBottom: 1 + "px",
    },
    author: {
      fontSize: 14,
    },
    title: {
      fontSize: 20,
      fontWeight: "bolder",
      ":hover:": {
        color: "lighter",
      },
    },
    margin: {},
    cover: {
      width: 100,
      height: 100,
    },
  });
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <grid item xs={3}>
          <CardMedia
            className={classes.cover}
            image={props.image}
            title={props.name}
            component="img"
          />
        </grid>
        <Grid item xs={9}>
          <CardContent elevation={0}>
            <a
              href={props.url}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography
                variant="h6"
                component="h5"
                className={classes.title}
                href={props.url}
              >
                {props.name}
              </Typography>
            </a>
            <Typography
              className={classes.author}
              color="textSecondary"
              gutterBottom
            >
              {props.author}
            </Typography>
            <Button
              size="small"
              className={classes.margin}
              variant="contained"
              disabled
            >
              {props.tag}
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Paper>
  );
};
