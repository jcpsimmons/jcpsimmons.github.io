import React, { Component } from "react";

const portfolioItems = [
  {
    title: "Abstruse",
    image: "",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: "",
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Simple Texting UX Research",
    image: "",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: "",
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Greatreads Web App",
    image: "",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: "",
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Dream Machine",
    image: "",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: "",
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Dream Machine",
    image: "",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: "",
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Dream Machine",
    image: "",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: "",
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Dream Machine",
    image: "",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: "",
    liveLink: "",
    gitHubLink: ""
  }
];

class PortfolioBody extends Component {
  render() {
    return (
      <div>
        {portfolioItems.map((item, index) => (
          <div>
            {index % 3 ? <p>noline</p> : <p>newline</p>}
            <h1>{item.title}</h1>
            <p>{index}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PortfolioBody;
