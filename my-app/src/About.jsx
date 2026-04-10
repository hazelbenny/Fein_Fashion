import React, { Component } from "react"; 
// Importing React and Component using ES6 modules

// Creating a class-based component
class About extends Component {

  constructor(props) {
    super(props); 
    // Calling parent constructor (important in class components)

    // State is used to control what is shown on screen
    this.state = {
      showMission: true,  // initially mission is visible
      showVision: true,   // initially vision is visible
    };
  }

  // Arrow function is used so we don’t have to manually bind 'this'
  toggleMission = () => {
    // Toggling the value (true → false or false → true)
    this.setState({
      showMission: !this.state.showMission
    });
  };

  toggleVision = () => {
    this.setState({
      showVision: !this.state.showVision
    });
  };

  // render() decides what should appear on the screen
  render() {
    return (

      // Main container for the entire page
      <div className="about-page">

        {/* Inner container for proper layout and spacing */}
        <div className="about-container">

          {/* Heading of the page */}
          <h2 className="about-title">About Fein</h2>

          {/* Small tagline below the title */}
          <p className="about-tagline">
            Style. Confidence. Everyday Elegance.
          </p>

          {/* Subheading */}
          <h3 className="about-subtitle">Brand Overview</h3>

          {/* Wrapping the table so we can style it nicely */}
          <div className="about-table-wrap">

            {/* Basic HTML table to show brand details */}
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

          {/* Paragraph section explaining the brand */}
          <div className="about-text-block">

            <p>
              Fein is a global fashion brand bringing trendy, affordable clothing
              to millions of fashion enthusiasts worldwide.
            </p>

            <p>
              Our online-first approach allows users to shop anytime and anywhere.
            </p>

          </div>

          {/* Mission card section */}
          <div className="about-section-card mission-card">

            {/* Header part with title and button */}
            <div className="about-section-header">

              <h3>Our Mission</h3>

              {/* Button triggers a function when clicked */}
              <button
                className="small-btn"
                onClick={this.toggleMission}
              >
                {/* Simple condition to change button text */}
                {this.state.showMission ? "Hide" : "Show"}
              </button>

            </div>

            {/* This part only shows if showMission is true */}
            {this.state.showMission && (
              <p>
                To empower fashion lovers by making trends affordable and accessible.
              </p>
            )}

          </div>

          {/* Vision card section */}
          <div className="about-section-card vision-card">

            <div className="about-section-header">

              <h3>Our Vision</h3>

              <button
                className="small-btn"
                onClick={this.toggleVision}
              >
                {this.state.showVision ? "Hide" : "Show"}
              </button>

            </div>

            {/* Again, conditional rendering based on state */}
            {this.state.showVision && (
              <p>
                To become a leading global fashion platform for all styles.
              </p>
            )}

          </div>

        </div>
      </div>
    );
  }
}

// Exporting so we can use this component in other files
export default About;