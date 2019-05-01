import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import Portfolio from "./components/portfolio/Portfolio";
import CurriculumVitae from "./components/curriculum-vitae/CurriculumVitae";
import Footer from "./components/footer/Footer";

ReactDOM.render(
  <div className="">
    <BrowserRouter>
      <Route path="/curriculum-vitae" exact component={CurriculumVitae} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/" exact component={LandingPage} />
    </BrowserRouter>
    <Footer />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
