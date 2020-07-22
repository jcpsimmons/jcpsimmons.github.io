import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Projects = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Coming Soon</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Projects;