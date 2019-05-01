import React from "react";
import { CURRENT_YEAR } from "../../config";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <p className="animated fadeIn slow delay-1s offBGColor">
            Made with{" "}
            <u>
              <a style={{ color: "#b9c7e2" }} href="https://reactjs.org/">
                React
              </a>
            </u>
          </p>
          <p
            className="animated fadeIn slow delay-1s offBGColor"
            style={{ color: "#e2cdbf" }}
          >
            Copyright © {CURRENT_YEAR} Josh C. Simmmons
          </p>
        </div>
      </div>
    </div>
  );
}
