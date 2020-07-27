import React from "react";
import styled from "styled-components";

import Image from "../Images/Image";
import { colors } from "../../utility/colors";

const PTContainer = styled.div`
  background: ${colors.tan};
  color: ${colors.grey};
  margin: 0 0.5rem 1rem;
  border-radius: 5px;
  padding: 1rem;
  height: 50%;
  flex: 1 1 30%;
  p {
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: left;
  }

  h2 {
    color: ${colors.orange};
    margin-bottom: 0.5rem;
  }

  hr {
    color: #bfada5;
    margin-bottom: 0.7rem;
  }

  button {
    color: ${colors.darkgrey};
    border: none;
    width: 100%;
    background-color: ${colors.tan};
    transition: 0.3s;
  }

  button:hover {
    transform: scale(1.06);
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  margin-bottom: 1rem;
`;

export default function ProjectTile({ name, image, blurb, link }) {
  return (
    <PTContainer>
      <h2>{name}</h2>
      <ImageContainer>
        <Image filename={image} />
      </ImageContainer>
      <p>{blurb}</p>
      {link ? (
        <>
          <hr />
          <a href={link}>
            <button>View Live</button>
          </a>
        </>
      ) : (
        ""
      )}
    </PTContainer>
  );
}
