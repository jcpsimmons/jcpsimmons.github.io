import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  faReact,
  faNode,
  faJsSquare,
  faAws,
  faPython,
  faUbuntu,
  faNpm,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

import FontAwesomePips from "../components/about/FontAwesomePips";
import { colors } from "../utility/colors";
import JumboPageHeader from "../components/global/JumboPageHeader";

const AboutContainer = styled.div`
  position: relative;
  p {
    text-align: left;
  }
  h2 {
    color: ${colors.orange};
  }
  h1 {
    display: inline-block;
  }
  h2 {
    font-size: 3rem;
  }
  span {
    color: ${colors.teal};
  }
  .tech {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  .tech > div {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const tech = [
  { fa: faReact, annotation: "React" },
  { fa: faNode, annotation: "Node" },
  { fa: faJsSquare, annotation: "JavaScript" },
  { fa: faAws, annotation: `AWS` },
  { fa: faPython, annotation: "Python" },
  { fa: faUbuntu, annotation: "Linux (Ubuntu)" },
  { fa: faNpm, annotation: "NPM" },
  { fa: faHtml5, annotation: "HTML 5" },
  { fa: faCss3, annotation: "CSS 3" },
];

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutContainer>
      <JumboPageHeader>A-bout...</JumboPageHeader>

      <div>
        <p>
          I'm a fullstack developer working primarily with JavaScript. I have{" "}
          {new Date().getFullYear() - 2015} years of professional experience. I
          began as a frontend developer then picked up Node/Express for backend
          work.
        </p>
        <p>
          My preferred stack is React - Express/Node - MongoDB (or Firestore).
        </p>

        <p>
          I'm a bit of an adrenaline junkie and enjoy rock climbing and
          motorcycle road trips in my spare time.
        </p>
        <p>
          I'm hoping remote work becomes more common after COVID is over because
          I think it'd be fun to travel the US indefinitely while working
          remotely.
        </p>
      </div>
      <div className="tech">
        <h2>
          Tech I <span>Enjoy</span> Working With:
        </h2>
        <div>
          {tech.map((el, idx) => {
            return <FontAwesomePips id={`pip_${idx}`} {...el} />;
          })}
        </div>
      </div>
      <Link to="/">Return Home</Link>
    </AboutContainer>
  </Layout>
);

export default About;
