import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProjectTile from "../components/projects/ProjectTile";

const TileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const projectList = [
  {
    name: "Multi-Product Lookup App",
    image: "product-api",
    blurb:
      "Product lookup application. Given a product SKU, it queries three APIs for various types of information on a product. Built with React and Redux. Deployed on Google Cloud Platform's App Engine",
  },
  {
    name: "DMMC Yoga",
    image: "dmmc",
    blurb:
      "Custom site built for David Carrow - Yoga Instructor. Site contains information and booking portal. Built with React and Gatsby.",
    link: "https://www.dmmc.fitness/",
  },
  {
    name: "Living Spaces",
    image: "living-spaces",
    blurb:
      "Multiple event and specialty pages and apps on the LivingSpaces.com website. Built using HTML/CSS/JavaScript.",
    link: "https://livingspaces.com",
  },
  {
    name: "Great Reads",
    image: "greatreads",
    blurb:
      "A web app built on the MERN stack for users to keep track of their books. Includes authentication and user profiles.",
    link: "https://pacific-stream-12395.herokuapp.com/",
  },
];

const Projects = () => (
  <Layout>
    <SEO title="Projects" />

    <h1 className="jumbo">Projects.</h1>
    <TileContainer>
      {projectList.map((props, idx) => {
        return <ProjectTile {...props} key={`pt_${idx}`} />;
      })}
    </TileContainer>
    <Link to="/">Go Home.</Link>
  </Layout>
);

export default Projects;
