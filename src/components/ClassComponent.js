import React, { Component } from "react";
import "../App.css";

class ClassComponent extends Component {
  render() {
    return (
      <div className="component-wrapper">
        
        {/* Theory Section */}
        <div className="theory-container">
          <h2 className="section-title">📘 Theory</h2>
          <p>
            Class Components are ES6 classes that extend <code>React.Component</code>.
            They can hold <b>state</b>, receive <b>props</b>, and use
            <b>lifecycle methods</b>.
          </p>
          <ul>
            <li>Use the <code>class</code> keyword.</li>
            <li>Must have a <code>render()</code> method.</li>
            <li>Support <b>state</b> and <b>lifecycle hooks</b>.</li>
          </ul>
        </div>

        {/* Implementation Section */}
        <div className="implementation-container">
          <h2 className="section-title">⚡ Implementation</h2>

          <h3>1. Basic Class Component</h3>
          <pre className="code-block">{`
class Hello extends React.Component {
  render() {
    return <h2>Hello, I am a Class Component!</h2>;
  }
}
          `}</pre>

          <h3>2. With Props</h3>
          <pre className="code-block">{`
class Greeting extends React.Component {
  render() {
    return <h2>Hello, {this.props.name}!</h2>;
  }
}
          `}</pre>

          <h3>3. With State</h3>
          <pre className="code-block">{`
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increment</button>
      </div>
    );
  }
}
          `}</pre>
        </div>

        {/* Demo Section */}
        <div className="demo-box">
          <h2 className="section-title">🚀 Demo</h2>
          <HelloDemo />
          <GreetingDemo name="Aishwarya" />
          <CounterDemo />
        </div>
      </div>
    );
  }
}

/* -------------------- DEMO COMPONENTS -------------------- */
class HelloDemo extends Component {
  render() {
    return <p style={{ color: "#0077cc" }}>Hello, I am a Class Component!</p>;
  }
}

class GreetingDemo extends Component {
  render() {
    return <p style={{ color: "#0077cc" }}>Hello, {this.props.name}!</p>;
  }
}

class CounterDemo extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <p style={{ color: "#0077cc" }}>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
