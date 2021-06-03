import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Biking } from "./Biking.js";
import { Reading } from "./Reading.js";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ paddingTop: 5 + "%" }}
    >
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </Grid>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  labelText: {
    fontSize: 18,
  },
}));

export const LifeTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="secondary"
          textColor="primary"
        >
          <Tab className={classes.labelText} label="Biking" {...a11yProps(0)} />
          <Tab
            className={classes.labelText}
            label="Reading"
            {...a11yProps(1)}
          />
          <Tab
            className={classes.labelText}
            label="Cooking"
            {...a11yProps(2)}
          />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>
        <Biking />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Reading />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h1">Coming soon</Typography>
      </TabPanel>
    </div>
  );
};
