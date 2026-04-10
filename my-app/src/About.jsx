import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMission: true,
      showVision: true,
    };
  }

  toggleMission = () => {
    this.setState({ showMission: !this.state.showMission });
  };

  toggleVision = () => {
    this.setState({ showVision: !this.state.showVision });
  };

  render() {
    return (
      <div className="about-page">
        <div className="about-container">
          <h2 className="about-title">About Fein</h2>
          <p className="about-tagline">Style. Confidence. Everyday Elegance.</p>

          <h3 className="about-subtitle">Brand Overview</h3>

          <div className="about-table-wrap">
            <table className="about-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Founded</td>
                  <td>2026</td>
                </tr>
                <tr>
                  <td>Brand Type</td>
                  <td>Online Fashion Retailer</td>
                </tr>
                <tr>
                  <td>Products</td>
                  <td>Clothing, Accessories, Footwear</td>
                </tr>
                <tr>
                  <td>Target Audience</td>
                  <td>Global Fashion Enthusiasts</td>
                </tr>
                <tr>
                  <td>Availability</td>
                  <td>Worldwide Online Shopping</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="about-text-block">
            <p>
              Fein is a global fashion brand bringing trendy, affordable clothing
              to millions of fashion enthusiasts worldwide. Since its inception,
              Fein has remained committed to stylish design, comfort, and
              accessible fashion for everyone.
            </p>

            <p>
              Our online-first approach ensures that customers can browse and shop
              anywhere, anytime. Fein blends fashion-forward designs with
              convenience, creating a modern and inspiring shopping experience
              for every generation.
            </p>
          </div>

          <div className="about-section-card mission-card">
            <div className="about-section-header">
              <h3>Our Mission</h3>
              <button className="small-btn" onClick={this.toggleMission}>
                {this.state.showMission ? "Hide" : "Show"}
              </button>
            </div>

            {this.state.showMission && (
              <p>
                To empower fashion lovers by making the latest trends accessible
                and affordable, while promoting sustainable and inclusive fashion
                practices that celebrate individuality and self-expression.
              </p>
            )}
          </div>

          <div className="about-section-card vision-card">
            <div className="about-section-header">
              <h3>Our Vision</h3>
              <button className="small-btn" onClick={this.toggleVision}>
                {this.state.showVision ? "Hide" : "Show"}
              </button>
            </div>

            {this.state.showVision && (
              <p>
                To become the world's leading online fashion platform, offering
                diverse collections that cater to every style, personality, and
                occasion while setting new standards in digital fashion retail.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default About;