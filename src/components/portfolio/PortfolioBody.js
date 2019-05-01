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
    liveLink: "http://jcsdesign.me/abstruse-landing-page/",
    gitHubLink: "https://github.com/jcpsimmons/spektra-public-prerelease"
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
    liveLink: "https://pacific-stream-12395.herokuapp.com/",
    gitHubLink: "https://github.com/jcpsimmons/greatreads"
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
    liveLink:
      "https://www.behance.net/gallery/79355581/SimpleTexting-UX-Research-and-UI-Design"
  },

  {
    title: "Dream Machine",
    image: "img/project-photos/dream-machine.png",
    info:
      "Website to document large-scale multimedia work for virtual reality and interactive electronics. The documentation website and VR beta application are linked below. I designed the VR application and the documentation website.",
    techTags: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Photoshop",
      "Illustrator",
      "Indesign"
    ],
    liveLink: "http://jcsdesign.me/dreammachine/",
    gitHubLink: "https://github.com/jcpsimmons/dreammachine"
  },
  {
    title: "TWEEDLE FARMS UI/UX",
    image: "img/project-photos/tweedle.png",
    info: "Mobile site concept developed for a medicinal hemp oufit.",
    techTags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Adobe XD",
      "Photoshop",
      "Illustrator Live",
      "Indesign"
    ],
    liveLink:
      "https://www.behance.net/gallery/72813661/Tweedle-Farms-Site-Concept"
  },
  {
    title: "RANDOM GRADIENT GENERATOR",
    image: "img/project-photos/react-gradient.png",
    info:
      "A small React utility I built for quickly generating random gradients. I plan on using bits of its code in future React projects.",
    techTags: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://jcpsimmons.github.io/click-gradient-generator/",
    gitHubLink: "http://github.com/jcpsimmons/click-gradient-generator"
  }
];

class PortfolioBody extends Component {
  render() {
    return (
      <div className="container animated bounceInRight delay-1s">
        <div className="card-columns">
          {portfolioItems.map((item, index) => (
            <div className="card card-coloring mb-4 grow" key={`card-${index}`}>
              <a href={item.liveLink}>
                <img
                  className="card-img-top img-fluid"
                  src={item.image}
                  alt={item.title}
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.info}</p>
                {item.techTags.map(tag => {
                  return (
                    <span
                      key={`pill-${tag}-${index}`}
                      className="badge badge-pill badge-primary mx-1"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div className="card-footer">
                {item.liveLink ? (
                  <a
                    href={item.liveLink}
                    className="btn btn-primary btn-sm btn-block"
                    role="button"
                  >
                    View Live
                  </a>
                ) : (
                  <div />
                )}

                {item.gitHubLink ? (
                  <a
                    href={item.gitHubLink}
                    className="btn btn-secondary btn-sm btn-block github-button"
                    role="button"
                  >
                    <i className="fab fa-github" />
                    &nbsp;&nbsp;View on GitHub
                  </a>
                ) : (
                  <div />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PortfolioBody;
