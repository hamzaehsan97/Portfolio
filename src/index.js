import React from "react";
import { render } from "react-dom";
import App from "./App";
import Resume from "../src/components/Resume";
import Cs from "../src/components/Cs";
import Life from "../src/components/Life";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Switch>
        {" "}
        <Route exact path="/" component={App} />
        <Route path="/portfolio" component={App} />
        <Route path="/resume" component={Resume} />
        <Route path="/cs" component={Cs} />
        <Route path="/life" component={Life} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
