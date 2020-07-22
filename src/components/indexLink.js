import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../utility/colors";

const LinkHolder = styled.div`
  background: ${colors.grey};
  display: block;
  padding: 0.75rem 1.2rem;
  border-radius: 5px;
  border: 1px solid ${colors.tan};
  transition: box-shadow 0.5s;
  will-change: transform;
  margin: 0 1rem 2rem;

  &:hover {
    box-shadow: 6px 6px 44px 5px ${colors.teal};
  }

  & span {
    font-family: "Raleway", "Courier New", Courier, monospace;
    font-weight: 200;
  }

  & a {
    color: ${colors.tan};
    text-decoration: none;
  }
  & svg {
    width: 1rem !important;
    height: 1rem;
    display: inline;
    text-align: center;
    margin: auto;
    margin-right: 0.5rem;
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function IndexLink({ name, link, fa }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <LinkHolder>
        <a href={link}>
          <FontAwesomeIcon icon={fa} />
          <span>{name}</span>
        </a>
      </LinkHolder>
    </animated.div>
  );
}
