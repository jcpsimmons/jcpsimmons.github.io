import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { colors } from "../../utility/colors";

const FaContainer = styled.div`
  display: block;
  margin: auto 0.75rem;
  width: 12rem;
  overflow: hidden;
  transition: 0.25s;

  &:hover {
    transform: scale(1.1);
  }

  pre {
    background: none;
    padding-top: 0.25rem;
    overflow: hidden;
  }
`;

export default function FontAwesomePips({ fa, annotation }) {
  return (
    <FaContainer>
      <FontAwesomeIcon icon={fa} size="3x" />
      <pre>{annotation}</pre>
    </FaContainer>
  );
}
