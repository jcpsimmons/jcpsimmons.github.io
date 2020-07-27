import React, { Component, createRef } from "react";
import styled from "styled-components";

import { colors } from "../../utility/colors";

const PaddingBlock = styled.div`
  height: ${(props) => props.mb * 0.95}px;
`;

const JPHContainer = styled.div`
  & > .textContainer {
    position: absolute;
    left: 50%;
    text-align: center;
    width: 100vw;
    transform: translateX(-50%);
  }
  & > div > h1 {
    white-space: nowrap;
    font-size: 20vw;
    font-weight: 200;
    color: ${colors.orange};
  }
`;

class JumboPageHeader extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
    this.state = { height: 0, initUpdate: false };
  }

  calcSetHeight() {
    this.setState({ initUpdate: true });
    const dims = this.containerRef.current.getBoundingClientRect();
    const height = dims.bottom - dims.top;

    // only update first time, and every 10px on resize to cut down on re-renders
    if (Math.abs(this.state.height - height) > 10 || !this.state.initUpdate) {
      console.log("upd");
      this.setState({ height });
    }
  }

  componentDidMount() {
    this.calcSetHeight();
    window.addEventListener("resize", this.calcSetHeight.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calcSetHeight.bind(this));
  }

  render() {
    return (
      <JPHContainer>
        <div className="textContainer" ref={this.containerRef}>
          <h1>{this.props.children}</h1>
        </div>
        <PaddingBlock mb={this.state.height} />
      </JPHContainer>
    );
  }
}

export default JumboPageHeader;
