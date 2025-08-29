import React, { Component } from "react";
import "../App.css";

class LogicalAndExample extends Component {
  state = { showMessage: true };

  render() {
    return (
      <div className="component-wrapper">
        {/* Theory */}
        <div className="theory-container">
          <h2 className="section-title"> Theory</h2>
          <p>
            The <b>Logical AND (&&)</b> operator is often used to render content only if a condition is true.
          </p>
        </div>

       
        <div className="implementation-container">
          <h2 className="section-title"> Implementation</h2>
          <pre className="code-block">{`
{ showMessage && <h2>Hello, User!</h2> }
          `}</pre>
        </div>

        
        <div className="demo-box">
          <h2 className="section-title"> Demo</h2>
          {this.state.showMessage && (
            <p style={{ color: "#0077cc" }}>Hello, this message is visible!</p>
          )}
        </div>
      </div>
    );
  }
}

export default LogicalAndExample;
