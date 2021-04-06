import React from "react";
import "./Layout.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core/";
import { CardHeader } from "@material-ui/core";
import { typography } from "@material-ui/system";
import { white } from "color-name";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

export const ProjectRow = (props) => {
  return (
    <div>
      {/* Container for Projects */}
      <Grid
        container
        className="App"
        justify="flex-end"
        alignItems="flex-start"
        direction="row"
        spacing={4}
      >
        <Grid item>
          <Grid
            container
            className="App"
            justify="flex-end"
            alignItems="flex-start"
            direction="column"
            spacing={6}
          >
            <Grid item>
              <ProjectCard
                project={{
                  name: "Sandy cunt",
                  description:
                    "Computer Vision based autonomous drone (Tello). Programed in python and python based computer vision/ machine learning libraries.",
                  url: "https://github.com/hamzaehsan97/AI_Rescue_Drone",
                }}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                project={{
                  name: "Speech Recognition CNN",
                  description:
                    "This project is a speech recognition application built using Convolutional Neural Networks in Python. The project was integrated to a VR language game, VRnacular.",
                  url: "https://github.com/hamzaehsan97/Dupolicity",
                }}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                project={{
                  name: "Hotline",
                  description:
                    "Hotline is a React based real estate platform focused to the needs of south asian real estate markets. The project was built using React, Node.JS, Firebase and MongoDB.",
                  url: "https://hotlineassociates.netlify.app/",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            className="App"
            justify="flex-end"
            alignItems="flex-start"
            direction="column"
            spacing={6}
          >
            <Grid item>
              <ProjectCard
                project={{
                  name: "FlashPass",
                  description:
                    "Flash Pass is a cross platform car wash automation app written in Flutter. Flash pass provides a universal car wash pass based on geo-location through the phone.",
                  url: "https://github.com/hamzaehsan97/car_wash",
                }}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                project={{
                  name: "EV2EV",
                  description:
                    "EV2EV is an IOS app which was the winning project for MakeHarvard 2019. The app is an innovative solution to fixing America's EV charging grid issues.",
                  url: "https://github.com/hamzaehsan97/MakeHarvard2019-Ev2Ev",
                }}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                project={{
                  name: "Dupolicity",
                  description:
                    "Dupolicity is an open source strategy cross-platform phone game built in Unity2D.",
                  url: "https://github.com/hamzaehsan97/Dupolicity",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            className="App"
            justify="flex-end"
            alignItems="flex-start"
            direction="column"
            spacing={6}
          >
            <Grid item>
              <ProjectCard
                project={{
                  name: "Portfolio",
                  description:
                    "This Project contains code to the Portfolio you are currently viewing.",
                  url: "https://github.com/hamzaehsan97/Portfolio",
                }}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                project={{
                  name: "Virus Growth Patterns",
                  description:
                    "V.G.P. is a data science based project coded in R. The project predicted the growth of COVID-19 virus based on travel patterns.",
                  url: "https://github.com/hamzaehsan97/VirusGrowthPatterns",
                }}
              />
            </Grid>
            <Grid item>
              <ProjectCard
                project={{
                  name: "College Rentention Rates",
                  description:
                    "C.R.R. is a data science project that studies the relationship between student's financial well-being and student dropout rates.",
                  url: "https://github.com/hamzaehsan97/CollegeRetentionRates",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
