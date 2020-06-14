import React from 'react';
import {Header} from './components/layout/Header';
import {Content} from './components/layout/Content';
import {Grid} from  '@material-ui/core/';
// import './Style.css';

export const App = () =>  (
  <Grid container className="App" justify="flex-start" alignItems="center" direction="column">
    <Grid item>
      <Header />
    </Grid>
    <Grid item>
      <Content />
    </Grid>
  </Grid>
 );

