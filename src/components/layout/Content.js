import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from "react";
import TextLoop from "react-text-loop";




export const Content = () => {
    // eslint-disable-next-line
    const x =1;
   return <Box component="span" m={5}>
       {/* <div className="content"> */}
       <div id="loop">
        Hi! I am Hamza and I am {" "}
        <TextLoop>
        <span id="loop">a software engineer</span>
        <span id="loop">a tech enthusiast  </span>
        <span id="loop">a mango man        </span>
        </TextLoop>
            </div>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            </Box>
};