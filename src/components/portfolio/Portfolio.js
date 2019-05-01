import React, { Component } from "react";
import PortfolioBody from "./PortfolioBody";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="starter-template">
          <div className="row">
            <div className="col-md-4">
              <p className="animated bounceInLeft">
                <b>
                  <a className="link" href="/">
                    HOME
                  </a>{" "}
                  /<span className="orangeText">PORTFOLIO</span>
                </b>
                <br />
                <b>
                  Hello! I'm currently for hire - contact me at <br />
                  <a className="link" href="mailto:jcpsimmons@gmail.com">
                    jcpsimmons@gmail.com
                  </a>
                </b>
              </p>
            </div>
            <div className="col-xl-8">
              {/* card rows here */}
              <PortfolioBody />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
