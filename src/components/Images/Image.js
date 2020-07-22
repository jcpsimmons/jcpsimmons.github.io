import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = ({ filename }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const img = data.allFile.edges.filter((i) => {
    return i.node.name === filename;
  })[0];

  return img ? (
    <Img fluid={img.node.childImageSharp.fluid} />
  ) : (
    <h1>Error-image not found</h1>
  );
};

export default Image;
