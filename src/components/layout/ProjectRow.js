import React from 'react';
import './Layout.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from  '@material-ui/core/';
import { CardHeader } from '@material-ui/core';
import { typography } from '@material-ui/system';
import { white } from 'color-name';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ProjectCard} from './ProjectCard';


export const ProjectRow = (props) => {
   return <div>
{/* Container for Projects */}
    <Grid container className="App" justify="flex-end" alignItems="flex-start" direction="row" spacing={6}>
        
        <Grid item>
        <ProjectCard project={{name: "Dupolicity",description:"Dupolicity is an open source strategy cross-platform phone game built in Unity2D.",url:"https://github.com/hamzaehsan97/dupolicity_Unity2D"}}
      />
        </Grid>
        <Grid item>
        <ProjectCard project={{name: "DroneSeek",description:"Computer Vision based disaster relief drone (Tello) . This was my capstone project.",url:"https://github.com/hamzaehsan97/AI_Rescue_Drone"}}
      />
        </Grid><Grid item>
        <ProjectCard project={{name: "Portfolio",description:"This Project contains code to the Portfolio you are currently viewing.",url:"https://github.com/hamzaehsan97/Portfolio"}} />
        </Grid>
    </Grid>
</div>
};