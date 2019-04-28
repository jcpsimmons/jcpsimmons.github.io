import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "#E3D9D2" }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <h1
              className="display-4 animated pulse"
              style={{ textAlign: "center" }}
            >
              Welcome.
            </h1>
            <center>
              <img
                className="animated fadeIn slow delay-1s"
                src="img/platoloop.gif"
                alt="looping platonic solid"
                align="middle"
                width="100"
              />
            </center>
            <h3 className="animated fadeIn slow delay-1s orangeText">
              This is the website of front end developer and designer Josh
              Simmons.
            </h3>

            <h3 className="animated fadeIn slow delay-2s">
              You can view Josh's{" "}
              <a className="link" href="/portfolio">
                portfolio
              </a>{" "}
              and peruse his{" "}
              <Link className="link" to="/curriculum-vitae">
                C.V.
              </Link>{" "}
              here.
            </h3>

            <h3 className="animated fadeIn slow delay-3s">
              <a className="link" href="mailto:jcpsimmons@gmail.com">
                JCPSimmons@gmail.com
              </a>
            </h3>

            <p
              className="animated fadeIn slow delay-5s offBGColor"
              style={{ color: "#e2cdbf" }}
            >
              Copyright © 2019 Josh C. Simmmons
            </p>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default LandingPage;
