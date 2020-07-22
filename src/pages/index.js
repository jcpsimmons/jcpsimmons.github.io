import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ProfileImage from "../components/Images/ProfileImage";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import {
  faImages,
  faAddressCard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

import IndexLink from "../components/indexLink";

const IndexContainer = styled.div`
  text-align: center;
  & > h1 {
    margin-bottom: 0;
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
  margin-top: 2rem;
`;

const linkData = [
  { name: "Projects.", link: "/projects", fa: faImages },
  { name: "About.", link: "/about", fa: faAddressCard },
  { name: "Contact.", link: "/contact", fa: faPhone },
];

const IndexPage = () => {
  const animProps = useSpring({
    opacity: "1",
    from: { opacity: "0" },
    config: { duration: 1000 },
  });

  return (
    <Layout>
      <SEO title="Home" />
      <IndexContainer>
        <animated.div style={animProps}>
          <ImageContainer>
            <ProfileImage />
          </ImageContainer>
        </animated.div>
        <animated.h1>👋 Hello</animated.h1>
        <p>
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
};

export default IndexPage;
