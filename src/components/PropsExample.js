import React from "react";
import "../App.css";

function PropsExample() {
  return (
    <div className="component-wrapper">

      {/* Theory Section */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory</h2>
        <p>
          Props (short for <b>properties</b>) are used to pass data from a parent
          component to a child component. They are <b>read-only</b>.
        </p>
        <ul>
          <li>Props allow reusability of components.</li>
          <li>They are immutable (cannot be changed by child).</li>
          <li>Work in both <b>functional</b> and <b>class</b> components.</li>
        </ul>
      </div>

      {/* Implementation Section */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>

        <h3>1. Functional Component with Props</h3>
        <pre className="code-block">{`
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
        `}</pre>

        <h3>2. Destructuring Props</h3>
        <pre className="code-block">{`
function Greeting({ name, age }) {
  return <h2>{name} is {age} years old.</h2>;
}
        `}</pre>

        <h3>3. Props in Class Component</h3>
        <pre className="code-block">{`
class Greeting extends React.Component {
  render() {
    return <h2>Hello, {this.props.name}!</h2>;
  }
}
        `}</pre>
      </div>

      {/* Demo Section */}
      <div className="demo-box">
        <h2 className="section-title">🚀 Demo</h2>
        <GreetingDemo name="Aishwarya" />
        <InfoDemo name="Rahul" age={22} />
        <ClassGreetingDemo name="Student" />
      </div>
    </div>
  );
}

/* -------------------- DEMO COMPONENTS -------------------- */
function GreetingDemo({ name }) {
  return <p style={{ color: "#0077cc" }}>Hello, {name}!</p>;
}

function InfoDemo({ name, age }) {
  return <p style={{ color: "#0077cc" }}>{name} is {age} years old.</p>;
}

class ClassGreetingDemo extends React.Component {
  render() {
    return <p style={{ color: "#0077cc" }}>Hello, {this.props.name}!</p>;
  }
}

export default PropsExample;
