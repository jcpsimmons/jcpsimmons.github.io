import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ProfileImage } from "../components/images";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import {
  faImages,
  faAddressCard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles-js";
import IndexLink from "../components/indexLink";
import { colors } from "../utility/colors";

const IndexContainer = styled.div`
  text-align: center;
  & > h1 {
    margin-bottom: 0;
  }
  & .byline {
    max-width: 600px;
    margin: auto;
    margin-bottom: 1rem;
  }

  #tsparticles {
    position: absolute;
    top:100px;
    left:0
    width: 100vw;
  }
`;

const ImageContainer = styled.div`
  max-width: 300px;
  margin: auto auto 1.45rem auto;
  border-radius: 100%;
  overflow: hidden;
`;

const LinkHolder = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 2rem;
`;

const linkData = [
  { name: "projects", link: "/projects", fa: faImages },
  { name: "about", link: "/about", fa: faAddressCard },
  { name: "contact", link: "/contact", fa: faPhone },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexContainer>
      <Particles
        params={{
          particles: {
            shape: "triangle",
            line_linked: {
              shadow: {
                enable: true,
                color: colors.teal,
                blur: 5,
              },
            },
          },
        }}
      />
      <ImageContainer>
        <ProfileImage />
      </ImageContainer>
      <h1>👋 Hello</h1>
      <p className="byline">
        My name is Josh. I'm a full stack developer with 5 years of experience
        specializing in JavaScript - primarily with{" "}
        <FontAwesomeIcon icon={faReact} /> React and{" "}
        <FontAwesomeIcon icon={faNodeJs} /> Node.
      </p>
      <LinkHolder>
        {linkData.map((props, idx) => {
          return <IndexLink key={`link_idx`} {...props} />;
        })}
      </LinkHolder>
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </IndexContainer>
  </Layout>
);

export default IndexPage;
