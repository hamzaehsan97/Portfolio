import React from 'react';
import './Layout.css';
import { Grid } from '@material-ui/core';

export const Footer = () => {
    // eslint-disable-next-line
   const x =1;
   return <Grid container className="footer" alignItems="center" justify='center'>
       <Grid item>
            <ul id="nav">
                <li>Email</li>
                <li>Resume</li>
                <li>Github</li>
                <li>LinkedIn</li>
            </ul>
       </Grid> 
   </Grid>
};