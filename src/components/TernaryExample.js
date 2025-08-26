import React, { Component } from "react";
import "../App.css";

class TernaryExample extends Component {
  state = { isLoggedIn: false };

  render() {
    return (
      <div className="component-wrapper">
        {/* Theory */}
        <div className="theory-container">
          <h2 className="section-title">📘 Theory</h2>
          <p>
            The <b>ternary operator</b> allows inline conditional rendering.
          </p>
        </div>

        {/* Implementation */}
        <div className="implementation-container">
          <h2 className="section-title">⚡ Implementation</h2>
          <pre className="code-block">{`
{ isLoggedIn ? <h2>Welcome!</h2> : <h2>Please log in</h2> }
          `}</pre>
        </div>

        {/* Demo */}
        <div className="demo-box">
          <h2 className="section-title">🚀 Demo</h2>
          <p style={{ color: "#0077cc" }}>
            {this.state.isLoggedIn ? "Welcome!" : "Please log in"}
          </p>
        </div>
      </div>
    );
  }
}

export default TernaryExample;
