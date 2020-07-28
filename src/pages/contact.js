import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import JumboPageHeader from "../components/global/JumboPageHeader";

const CContainer = styled.div`
  width: 100%;
  text-align: left;
  & > .list {
    max-width: 800px;
    margin: auto;
  }
  & > .ctr {
    text-align: center;
  }
`;

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <CContainer>
      <JumboPageHeader>Contact</JumboPageHeader>
      <p>I offer a number of services including the following:</p>
      <div className="list">
        <ul>
          <li>Web Design/Development</li>
          <li>App Development</li>
          <li>Photography</li>
          <li>SEO</li>
        </ul>
      </div>
      <p>
        Reach out at{" "}
        <a href="mailto:jcpsimmons@gmail.com">jcpsimmons@gmail.com</a> for a
        free consultation.
      </p>
      <div className="ctr">
        <Link to="/">Go back to the homepage</Link>
      </div>
    </CContainer>
  </Layout>
);

export default Contact;
