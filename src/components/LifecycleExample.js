import React, { Component, useEffect, useState } from "react";
import "../App.css";

function LifecycleComponent() {
  return (
    <div className="component-wrapper">

      {/* Theory Section */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory</h2>
        <p>
          Lifecycle methods let you run code at specific times in a component’s
          life (mounting, updating, unmounting).
        </p>
        <ul>
          <li>Class components use methods like <code>componentDidMount</code>.</li>
          <li>Functional components use <code>useEffect</code> hook.</li>
        </ul>
      </div>

      {/* Implementation Section */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>

        <h3>1. Functional Component with useEffect</h3>
        <pre className="code-block">{`
function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return <p>Time: {seconds}</p>;
}
        `}</pre>

        <h3>2. Class Component with Lifecycle</h3>
        <pre className="code-block">{`
class Timer extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <p>Time: {this.state.seconds}</p>;
  }
}
        `}</pre>
      </div>

      {/* Demo Section */}
      <div className="demo-box">
        <h2 className="section-title">🚀 Demo</h2>
        <TimerDemo />
        <ClassTimerDemo />
      </div>
    </div>
  );
}

/* -------------------- DEMO COMPONENTS -------------------- */
function TimerDemo() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return <p style={{ color: "#0077cc" }}>Time: {seconds} sec</p>;
}

class ClassTimerDemo extends Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.setState({ seconds: this.state.seconds + 1 }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <p style={{ color: "#0077cc" }}>Time: {this.state.seconds} sec</p>;
  }
}

export default LifecycleComponent;
