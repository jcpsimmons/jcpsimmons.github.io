import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../utility/colors";

const LinkHolder = styled.div`
  background: ${colors.orange};
  display: inline-block;
  padding: 1rem;
  border-radius: 5px;

  transition: box-shadow 0.5s;
  will-change: transform;
  margin: 0 1rem 3rem;
  width: 7rem;

  &:hover {
    box-shadow: 6px 6px 44px 5px #a93119;
  }

  & a {
    color: ${colors.grey};
    text-decoration: none;
  }
  & svg {
    width: 3rem !important;
    height: 3rem;
    display: block;
    text-align: center;
    margin: auto;
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
          {name}
        </a>
      </LinkHolder>
    </animated.div>
  );
}
