import React, { Component } from "react";
import PortfolioBody from "./PortfolioBody";

export default class Portfolio extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="starter-template">
          <div class="row">
            <div class="col-md-4">
              <p class="animated bounceInLeft">
                <b>
                  <a class="link" href="/">
                    HOME
                  </a>{" "}
                  /<span class="orangeText">PORTFOLIO</span>
                </b>
                <br />
                <b>
                  Hello! I'm currently for hire - contact me at <br />
                  <a class="link" href="mailto:jcpsimmons@gmail.com">
                    jcpsimmons@gmail.com
                  </a>
                </b>
              </p>
            </div>
            <div class="col-xl-8">
              {/* card rows here */}
              <PortfolioBody />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
