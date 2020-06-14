import React from 'react';
import './Layout.css';
import { Grid } from '@material-ui/core';


export const Header = () => {
    // eslint-disable-next-line
    const x =1;
   return <Grid container className="header" alignItems="center" justify='center'>
       <Grid item>
            <ul id="nav">
                <li >CS</li>
                <li >Philosophy</li>
                <li >Resume</li>
            </ul>
       </Grid>
           
   </Grid>
};

