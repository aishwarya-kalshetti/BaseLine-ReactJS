import React, { Component } from "react";
import "../App.css";

class StateWithoutConstructor extends Component {
  state = { message: "Hello from State without Constructor!" };

  render() {
    return (
      <div className="component-wrapper">
        
        <div className="theory-container">
          <h2 className="section-title"> Theory</h2>
          <p>
            Instead of using a constructor, we can define <b>state</b> directly
            as a class property.
          </p>
        </div>

     
        <div className="implementation-container">
          <h2 className="section-title">⚡ Implementation</h2>
          <pre className="code-block">{`
class Demo extends Component {
  state = { message: "Hello!" };
}
          `}</pre>
        </div>

       
        <div className="demo-box">
          <h2 className="section-title"> Demo</h2>
          <p style={{ color: "#0077cc" }}>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default StateWithoutConstructor;
