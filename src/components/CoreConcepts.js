// src/components/CoreConcepts.js
import React, { createContext, useContext, useState, Component } from "react";
import "../App.css";

/* ---------------- Context setup for demo ---------------- */
const ThemeContext = createContext("light");

function CoreConcepts() {
  return (
    <div className="component-wrapper">
      {/* Theory */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory (React Core Concepts)</h2>
        <ul>
          <li><b>Fragments</b>: Group children without extra DOM nodes.</li>
          <li><b>Context API</b>: Share data globally without prop drilling.</li>
          <li><b>Error Boundaries</b>: Catch runtime errors in a subtree.</li>
          <li><b>React Router</b>: Navigate between pages with routes & links.</li>
        </ul>
      </div>

      {/* Implementation */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>

        <h3>1) Fragment</h3>
        <pre className="code-block">{`
function MyList() {
  return (
    <>
      <li>Item A</li>
      <li>Item B</li>
    </>
  );
}
        `}</pre>

        <h3>2) Context API</h3>
        <pre className="code-block">{`
const ThemeContext = createContext("light");

function ThemeText() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeText />
    </ThemeContext.Provider>
  );
}
        `}</pre>

        <h3>3) Error Boundary (Class Only)</h3>
        <pre className="code-block">{`
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err, info) { console.log(err, info); }
  render() {
    if (this.state.hasError) return <h3>Something went wrong.</h3>;
    return this.props.children;
  }
}
        `}</pre>

        <h3>4) React Router (concept)</h3>
        <pre className="code-block">{`
// App.js
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <p>User ID: {id}</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}

<Routes>
  <Route path="/user/:id" element={<User />} />
</Routes>
<Link to="/user/42">Open User 42</Link>
        `}</pre>
      </div>

      {/* Demo */}
      <div className="demo-box demo-conditional">
        <h2 className="section-title">🚀 Demo</h2>
        <h4>Fragment Demo</h4>
        <ul style={{ paddingLeft: 18 }}>
          <>
            <li>Zero extra divs ✨</li>
            <li>Clean DOM structure</li>
          </>
        </ul>

        <h4>Context Demo</h4>
        <ThemeContext.Provider value="dark">
          <ThemeTextDemo />
        </ThemeContext.Provider>

        <h4>Error Boundary Demo</h4>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>
    </div>
  );
}

/* -------------------- DEMOS -------------------- */
function ThemeTextDemo() {
  const theme = useContext(ThemeContext);
  return <p style={{ color: "#0077cc" }}>Current theme from Context: <b>{theme}</b></p>;
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.log("Caught by Error Boundary:", err, info);
  }
  render() {
    if (this.state.hasError) return <p style={{ color: "crimson" }}>⚠️ Something broke in child.</p>;
    return this.props.children;
  }
}

function BuggyCounter() {
  const [count, setCount] = useState(0);
  if (count === 3) {
    // simulate a crash
    throw new Error("Crashed at 3 😵");
  }
  return (
    <div>
      <p>Click until 3 to trigger error boundary:</p>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
}

export default CoreConcepts;
