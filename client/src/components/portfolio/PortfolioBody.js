import React, { Component } from "react";

const portfolioItems = [
  {
    title: "Abstruse",
    image: "img/project-photos/abstruse.png",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: [
      "Unity",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "MaxMSP",
      "Ableton Live",
      "MIDI",
      "OSC"
    ],
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Simple Texting UX Research",
    image: "img/project-photos/simple-texting.png",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: [
      "Unity",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "MaxMSP",
      "Ableton Live",
      "MIDI",
      "OSC"
    ],
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Greatreads Web App",
    image: "img/project-photos/mern-stack.png",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: [
      "Unity",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "MaxMSP",
      "Ableton Live",
      "MIDI",
      "OSC"
    ],
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Dream Machine",
    image: "img/project-photos/dream-machine.png",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: [
      "Unity",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "MaxMSP",
      "Ableton Live",
      "MIDI",
      "OSC"
    ],
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Dream Machine",
    image: "img/project-photos/abstruse.png",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: [
      "Unity",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "MaxMSP",
      "Ableton Live",
      "MIDI",
      "OSC"
    ],
    liveLink: "",
    gitHubLink: ""
  },
  {
    title: "Dream Machine",
    image: "img/project-photos/abstruse.png",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: [
      "Unity",
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "MaxMSP",
      "Ableton Live",
      "MIDI",
      "OSC"
    ],
    liveLink: "",
    gitHubLink: ""
  }
];

class PortfolioBody extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-deck">
          {portfolioItems.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div className="card mb-4" id={index}>
                <a href={item.liveLink}>
                  <img
                    class="card-img-top img-fluid"
                    src={item.image}
                    alt={item.title}
                  />
                </a>
                <div class="card-body">
                  <h4 class="card-title">{item.title}</h4>
                  <p class="card-text">{item.info}</p>
                  {item.techTags.map(tag => {
                    return (
                      <span className="badge badge-pill badge-primary mx-1">
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <div class="card-footer">
                  <a
                    href="https://jcpsimmons.github.io/abstruse-landing-page/"
                    class="btn btn-primary btn-sm btn-block"
                    role="button"
                  >
                    View Live
                  </a>
                  <a
                    href="https://github.com/jcpsimmons/spektra-public-prerelease"
                    class="btn btn-secondary btn-sm btn-block github-button"
                    role="button"
                  >
                    <i class="fab fa-github" />
                    &nbsp;&nbsp;View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PortfolioBody;
