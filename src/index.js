import React from "react";
import { render } from "react-dom";
import  App  from "./App";
import Resume from "../src/components/Resume";
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/portfolio" component={App} />
      <Route path="/resume" component={Resume} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))