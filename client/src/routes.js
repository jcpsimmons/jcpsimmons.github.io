import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/landing-page/LandingPage";
import Portfolio from "./components/portfolio/Portfolio";
import CurriculumVitae from "./components/curriculum-vitae/CurriculumVitae";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/curriculum-vitae" exact component={CurriculumVitae} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>
    );
  }
}

export default Routes;
