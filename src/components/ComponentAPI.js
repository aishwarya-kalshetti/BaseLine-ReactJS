import React, { Component } from "react";
import "../App.css";

class ComponentAPI extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Aishwarya" };
  }

  render() {
    return (
      <div className="component-wrapper">
       
        <div className="theory-container">
          <h2 className="section-title"> Theory</h2>
          <p>
            The <b>Component API</b> in React provides methods like{" "}
            <code>setState()</code>, <code>forceUpdate()</code>, and{" "}
            <code>findDOMNode()</code> to interact with components.
          </p>
          <ul>
            <li><b>setState()</b> → updates state.</li>
            <li><b>forceUpdate()</b> → forces a re-render.</li>
            <li><b>findDOMNode()</b> → accesses DOM node (legacy).</li>
          </ul>
        </div>

       
        <div className="implementation-container">
          <h2 className="section-title"> Implementation</h2>

          <h3>1. Using setState()</h3>
          <pre className="code-block">{`
this.setState({ name: "React Developer" });
          `}</pre>

          <h3>2. Using forceUpdate()</h3>
          <pre className="code-block">{`
this.forceUpdate();
          `}</pre>
        </div>


        <div className="demo-box">
          <h2 className="section-title"> Demo</h2>
          <SetStateDemo />
          <ForceUpdateDemo />
        </div>
      </div>
    );
  }
}


class SetStateDemo extends Component {
  state = { count: 0 };

  render() {
    return (
      <div style={{ margin: "10px 0" }}>
        <p style={{ color: "#0077cc" }}>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment (setState)
        </button>
      </div>
    );
  }
}

class ForceUpdateDemo extends Component {
  render() {
    return (
      <div style={{ margin: "10px 0" }}>
        <p style={{ color: "#0077cc" }}>Random: {Math.random()}</p>
        <button onClick={() => this.forceUpdate()}>Force Update</button>
      </div>
    );
  }
}

export default ComponentAPI;
