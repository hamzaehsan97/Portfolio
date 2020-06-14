import React from 'react';
import TextLoop from "react-text-loop";
import { Grid } from '@material-ui/core';



export const Content = () => {
    // eslint-disable-next-line
    const x =1;
    return <Grid container alignItems="center" justify="space-between" direction="column" spacing={6}>
        <Grid item>
            <h1 id="greeting">
                Hello there
            </h1>
        </Grid>
        <Grid item>
            <div id="loop">
                <Grid container justify="flex-start" spacing={1}>
                    <Grid item> Hi, I'm Hamza and I am a{" "}</Grid>
                    <Grid item>
                        <TextLoop>
                            <span id="loop">techie</span>
                            <span id="loop">SWE</span>
                            <span id="loop">learner</span>
                            <span id="loop">developer</span>
                        </TextLoop>
                    </Grid>
                     
                </Grid>
                
            </div>
        </Grid>
    </Grid>
};