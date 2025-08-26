import React, { Component } from "react";
import "../App.css";

class StateWithConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello, Aishwarya!" };
  }

  render() {
    return (
      <div className="component-wrapper">
        {/* Theory */}
        <div className="theory-container">
          <h2 className="section-title">📘 Theory</h2>
          <p>
            State can be initialized inside the <b>constructor()</b> of a class component.
          </p>
        </div>

        {/* Implementation */}
        <div className="implementation-container">
          <h2 className="section-title">⚡ Implementation</h2>
          <pre className="code-block">{`
constructor(props) {
  super(props);
  this.state = { message: "Hello!" };
}
          `}</pre>
        </div>

        {/* Demo */}
        <div className="demo-box">
          <h2 className="section-title">🚀 Demo</h2>
          <p style={{ color: "#0077cc" }}>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default StateWithConstructor;
