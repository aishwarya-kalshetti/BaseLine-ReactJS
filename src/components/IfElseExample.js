import React, { Component } from "react";
import "../App.css";

class IfElseExample extends Component {
  state = { isLoggedIn: true };

  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = "Welcome, Aishwarya!";
    } else {
      message = "Please log in.";
    }

    return (
      <div className="component-wrapper">
       
        <div className="theory-container">
          <h2 className="section-title"> Theory</h2>
          <p>Conditional rendering using <b>if-else</b> statements.</p>
        </div>

       
        <div className="implementation-container">
          <h2 className="section-title"> Implementation</h2>
          <pre className="code-block">{`
if (isLoggedIn) {
  return <h2>Welcome!</h2>;
} else {
  return <h2>Please log in</h2>;
}
          `}</pre>
        </div>

      
        <div className="demo-box">
          <h2 className="section-title"> Demo</h2>
          <p style={{ color: "#0077cc" }}>{message}</p>
        </div>
      </div>
    );
  }
}

export default IfElseExample;
