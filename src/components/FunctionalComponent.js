import React, { useState, useEffect } from "react";
import "../App.css";

function FunctionalComponent() {
  return (
    <div className="component-wrapper">
      
      {/* Theory Section */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory</h2>
        <p>
          Functional Components are just JavaScript functions that return JSX (HTML-like code).
          They are simple to write and understand. With React Hooks, they can also
          handle <b>state</b> and <b>side effects</b>.
        </p>
        <ul>
          <li>They don’t use the <b>class</b> keyword.</li>
          <li>Great for building UI parts of your app.</li>
          <li>Hooks like <code>useState</code> and <code>useEffect</code> add extra power.</li>
        </ul>
      </div>

      {/* Implementation Section */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>

        <h3>1. Simple Functional Component</h3>
        <pre className="code-block">{`
function Hello() {
  return <h2>Hello, I am a simple functional component!</h2>;
}
        `}</pre>

        <h3>2. With Props</h3>
        <pre className="code-block">{`
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
        `}</pre>

        <h3>3. With useState</h3>
        <pre className="code-block">{`
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
        `}</pre>

        <h3>4. With useEffect</h3>
        <pre className="code-block">{`
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>Timer: {seconds} seconds</p>;
}
        `}</pre>
      </div>

      {/* Demo Section */}
      <div className="demo-box">
        <h2 className="section-title">🚀 Demo</h2>
        <HelloDemo />
        <GreetingDemo name="Aishwarya" />
        <CounterDemo />
        <TimerDemo />
      </div>
    </div>
  );
}

/* -------------------- DEMO COMPONENTS -------------------- */
function HelloDemo() {
  return <p style={{ color: "#0077cc" }}>Hello, I am a simple functional component!</p>;
}

function GreetingDemo({ name }) {
  return <p style={{ color: "#0077cc" }}>Hello, {name}!</p>;
}

function CounterDemo() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: "10px" }}>
      <p style={{ color: "#0077cc" }}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function TimerDemo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  return <p style={{ color: "#0077cc" }}>Timer: {seconds} seconds</p>;
}

export default FunctionalComponent;
