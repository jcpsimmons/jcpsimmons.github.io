import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

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
              <a className="link" href="/curriculum-vitae">
                C.V.
              </a>{" "}
              here.
            </h3>
            <h3 className="animated fadeIn slow delay-3s">
              Learn about this site's{" "}
              <a
                className="link"
                href="https://www.behance.net/gallery/77864745/Artist-Portfolio-Site-Design"
              >
                design
              </a>{" "}
              or{" "}
              <a
                className="link"
                href="https://github.com/jcpsimmons/jcpsimmons.github.io"
              >
                code
              </a>{" "}
              here.
            </h3>
            <h3 className="animated fadeIn slow delay-3s">
              <a className="link" href="mailto:jcpsimmons@gmail.com">
                JCPSimmons@gmail.com
              </a>
            </h3>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default LandingPage;
