import React from "react";
import { CURRENT_YEAR } from "../../config";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12" style={{ textAlign: "center" }}>
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
