import React from "react";
import "./Layout.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core/";
import { Book } from "./Book";
import Paper from "@material-ui/core/Paper";

export const Reading = (props) => {
  // eslint-disable-next-line
  const useStyles = makeStyles({
    root: {
      minWidth: 600 + "px",
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
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item className={classes.root}>
        <Paper style={{ padding: 2 + "em" }}>
          <Typography
            variant="h4"
            style={{ fontWeight: 300, marginBottom: 1 + "em" }}
          >
            I am currently reading:
          </Typography>
          <br />
          <Book
            name="Radical Candor"
            author="Kim Scott"
            tag="Self Improvement"
            image="https://images-na.ssl-images-amazon.com/images/I/41niRlvb2PL._SX327_BO1,204,203,200_.jpg"
            url="https://www.amazon.com/Radical-Candor-Kim-Scott/dp/B01KTIEFEE"
          />
        </Paper>
      </Grid>
      <Grid item className={classes.root} style={{ marginTop: 3 + "em" }}>
        <Paper style={{ padding: 2 + "em" }}>
          <Typography
            variant="h4"
            style={{ fontWeight: 300, marginBottom: 1 + "em" }}
          >
            Book Recommendations:
          </Typography>

          <Book
            name="The 7 Habits of Highly Effective People"
            author="Stephen Covey"
            tag="Self Improvement"
            image="https://m.media-amazon.com/images/I/51fEYMhtHoL.jpg"
            url="https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519"
          />
          <Book
            name="Soonish: Ten Emerging Technologies ..."
            author="Kelly Weinersmith"
            tag="Technology"
            image="https://images-na.ssl-images-amazon.com/images/I/51bNsMS8EBL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
            url="https://www.publishersweekly.com/978-0-399-56382-9"
          />
          <Book
            name="Zero To One"
            author="Peter Thiel"
            tag="Innovation"
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420843434l/18070752.jpg"
            url="https://www.goodreads.com/book/show/18050143-zero-to-one"
          />
          <Book
            name="The Lean Startup"
            author="Eric Ries"
            tag="Business"
            image="http://4.bp.blogspot.com/-YIMcWtDCIo8/ThT0l_2IisI/AAAAAAAAA70/36mkMo3o-fw/w1200-h630-p-k-no-nu/ERIES_Enso_in_Blue_Master.png"
            url="http://theleanstartup.com/principles"
          />
          <Book
            name="The Airbnb Story: How Three Ordinary Guys ..."
            author="Leigh Gallagher"
            tag="Business"
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474820240i/32198220._UY400_SS400_.jpg"
            url="https://www.hmhbooks.com/shop/books/the-airbnb-story/9781328745545"
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
