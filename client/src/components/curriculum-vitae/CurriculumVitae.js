import React from "react";
import { Link } from "react-router-dom";

export default function CurriculumVitae() {
  return (
    <div className="container">
      <div className="starter-template">
        <div className="row">
          <div className="col-md-4">
            <p className="animated bounceInLeft">
              <b>
                <a className="link" href="/">
                  HOME
                </a>{" "}
                / <span className="orangeText">CURRICULUM VITAE</span>
              </b>
            </p>
          </div>

          <div className="col-md-8" style={{ textAlign: "left" }}>
            <h4 className="animated bounceInRight delay-1s">Education</h4>
            <p className="animated fadeIn delay-2s">
              <b>
                Bowling Green State University — Masters Degree — Spring 2015
              </b>
            </p>

            <h4 className="animated bounceInRight delay-1s">Positions Held</h4>
            <p className="animated fadeIn delay-2s">
              <b>
                UC Irvine — Researcher in Digital Media
                <br />
                UC Irvine — Research Positions in Web and Graphic Design
                <br />
                Headbang VR LLC — Founder and Software Developer
                <br />
                UC Irvine — Instructor
              </b>
            </p>

            <h4 className="animated bounceInRight delay-1s">
              Honors: Selected Exhibitions
            </h4>
            <p className="animated fadeIn delay-2s">
              <b>
                1000 hooded priests… — Brand New Blinkers — London
                <br />
                INDRA//NET — Glas Animation Festival — Berkeley
                <br />
                breach of the primary… — Understanding Visual Music — Brazil
                <br />
                bitPushIntersection — ICMC-SMC Joint Conference — Athens
                <br />
                bitPushIntersection — Poznan Musical Spring — Poland
              </b>
            </p>

            <h4 className="animated bounceInRight delay-1s">
              Honors: Reviewer Positions
            </h4>
            <p className="animated fadeIn delay-2s">
              <b>
                NIME 2019 — Paper Reviewer
                <br />
                TS 2018 — Artistic Direction
                <br />
                NIME 2018 — Paper Reviewer
                <br />
                WIMT 2016 — Artistic Direction
              </b>
            </p>
            <p className="animated fadeIn slow delay-3s">
              <span className="lightText">
                <i>
                  View my LinkedIn{" "}
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/joshcsimmons/"
                  >
                    here
                  </a>
                  .
                </i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
