import React from 'react';
import {Header} from './components/layout/Header';
import {Content} from './components/layout/Content';
import {Grid} from  '@material-ui/core/';
import {Footer} from './components/layout/Footer';

export const App = () =>  (
  <Grid container className="App" justify="flex-start" alignItems="stretch" direction="column" spacing={3}>
    <Grid item >
      <Header />
    </Grid>
    <Grid item>
      <Content />
    </Grid>
    <Grid item>
      <Footer />
    </Grid>
  </Grid>
 );

