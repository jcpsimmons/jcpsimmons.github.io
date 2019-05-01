import React, { Component } from "react";

let portfolioItems = [];

class PortfolioBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    this.loadData();
  }

  loadData = () => {
    fetch("../../data/projects-data/projects-data.json")
      .then(res => {
        this.setState({ data: res });
        console.log(res.json());
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        {console.log(portfolioItems)}
        {/* <div className="card-deck">
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
        </div> */}
      </div>
    );
  }
}

export default PortfolioBody;
