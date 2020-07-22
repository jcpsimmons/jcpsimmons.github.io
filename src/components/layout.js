import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import "typeface-raleway";
import "typeface-old-standard-tt";

import Header from "./header";
import "./layout.css";
import "./basestyle.css";

import { colors } from "../utility/colors";

const MainStyle = styled.div`
  margin: 0;
  padding: 0;
  p {
    max-width: 600px;
    margin: auto;
    margin-bottom: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.teal};
    font-family: "Old Standard TT", Arial, Helvetica, sans-serif;
    font-style: italic;
    letter-spacing: 0.1rem;
  }
  h1.jumbo {
    white-space: nowrap;
    font-size: 20vw;
    font-weight: 200;
    color: ${colors.orange};
  }

  p {
    font-family: "Raleway", "Courier New", Courier, monospace;
    font-weight: 600;
  }

  p > b,
  span > b {
    font-weight: 800;
  }

  a {
    color: ${colors.teal};
    font-weight: 600;
  }
  text-align: center;
`;
const Footer = styled.footer`
  text-align: center;
  background: ${colors.darkgrey};
  width: 100%;
  padding: 1rem;
  & > a {
    color: ${colors.teal};
    font-weight: 600;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const animProps = useSpring({
    transform: "translateY(0%)",
    from: { transform: "translateY(-100%)" },
    config: { delay: 10000 },
  });

  return (
    <>
      <MainStyle>
        <animated.div style={animProps}>
          <Header siteTitle={data.site.siteMetadata.title} />
        </animated.div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
      </MainStyle>{" "}
      <Footer>
        © {new Date().getFullYear()} Josh C. Simmons, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
