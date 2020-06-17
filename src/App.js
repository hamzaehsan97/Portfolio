import React from 'react';
import {Header} from './components/layout/Header';
import {Content} from './components/layout/Content';
import {Grid} from  '@material-ui/core/';
import {ProjectCard} from './components/layout/ProjectCard';
import {ProjectLabel} from './components/layout/ProjectLabel';
import {ProjectRow} from './components/layout/ProjectRow';

export const App = () =>  (
  <div>
     <Grid container className="App" justify="flex-end" alignItems="flex-start" direction="row" >
   <Header />  
  </Grid>
    <Grid container className="App" justify="flex-start" alignItems="center" direction="column" >
    <Grid item xs={8}>
      <Content />
    </Grid>
    <Grid item>
      <ProjectLabel />
      <ProjectRow />
    </Grid>
  </Grid>
  </div>
 
  
 );

