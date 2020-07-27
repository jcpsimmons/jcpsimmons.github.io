import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { colors } from "../utility/colors";

const CustomHeader = styled.header`
  background: ${colors.teal};
  margin-bottom: 1.45rem;
  color: ${colors.grey};
  text-align: center;

  & h1 {
    margin: 0;
    color: ${colors.orange}!important;
  }
  & svg {
    float: left;
    margin-top: 1%;
  }
  a {
    text-decoration: none;
    color: ${colors.orange}!important;
  }
`;

const Header = ({ siteTitle }) => {
  const checkWindow = () => {
    if (typeof window == "undefined") {
      return false;
    } else if (window.location.pathname == "/") {
      return false;
    } else {
      return false;
    }
  };

  return (
    <CustomHeader>
      {" "}
      <Link to="/">
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `.85rem 1.0875rem`,
          }}
        >
          {" "}
          {window.location.pathname == "/" ? (
            ""
          ) : (
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          )}
          <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        </div>
      </Link>
    </CustomHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
