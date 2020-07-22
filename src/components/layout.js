import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import "typeface-raleway";
import "typeface-old-standard-tt";

import Header from "./header";
import "./layout.css";
import "./basestyle.css";

import { colors } from "../utility/colors";

const MainStyle = styled.div`
  margin: 0;
  padding: 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Old Standard TT", Arial, Helvetica, sans-serif;
    font-style: italic;
    letter-spacing: 0.1rem;
  }

  p,
  span {
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
`;
const Footer = styled.footer`
  text-align: center;
  background: ${colors.grey};
  width: 100%;
  padding: 2rem;
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

  return (
    <>
      <MainStyle>
        <Header siteTitle={data.site.siteMetadata.title} />
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
