import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { colors } from "../utility/colors";

const CustomHeader = styled.header`
  background: ${colors.teal};
  margin-bottom: 1.45rem;
  color: ${colors.grey};
  text-align: center;

  a {
    text-decoration: none;
    color: ${colors.orange}!important;
  }
`;

const Header = ({ siteTitle }) => (
  <CustomHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </CustomHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
