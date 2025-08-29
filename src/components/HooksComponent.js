import React, { useState, useEffect, useRef, useContext, useReducer } from "react";
import "../App.css";


const ThemeContext = React.createContext("light");


const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
}

function HooksComponent() {
  return (
    <div className="component-wrapper">

      
      <div className="theory-container">
        <h2 className="section-title"> Theory</h2>
        <p>
          React Hooks let you use state and other React features in functional components.
        </p>
        <ul>
          <li><b>useState:</b> Manage state inside a function.</li>
          <li><b>useEffect:</b> Side effects like fetching data, timers.</li>
          <li><b>useRef:</b> Access DOM elements or persist values.</li>
          <li><b>useContext:</b> Consume values from Context API.</li>
          <li><b>useReducer:</b> Manage complex state logic.</li>
        </ul>
      </div>

      
      <div className="implementation-container">
        <h2 className="section-title"> Implementation</h2>

        <h3>1. useState</h3>
        <pre className="code-block">{`
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
        `}</pre>

        <h3>2. useEffect</h3>
        <pre className="code-block">{`
function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>Time: {time}</p>;
}
        `}</pre>

        <h3>3. useRef</h3>
        <pre className="code-block">{`
function InputFocus() {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
        `}</pre>

        <h3>4. useContext</h3>
        <pre className="code-block">{`
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === "dark" ? "#333" : "#eee" }}>
    {theme} Mode
  </button>;
}
        `}</pre>

        <h3>5. useReducer</h3>
        <pre className="code-block">{`
function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
        `}</pre>
      </div>

  
      <div className="demo-box">
        <h2 className="section-title"> Demo</h2>
        <div className="demo-container"><CounterDemo /></div>
        <div className="demo-container"><TimerDemo /></div>
        <div className="demo-container"><InputFocusDemo /></div>
        <div className="demo-container">
          <ThemeContext.Provider value="dark">
            <ThemedButtonDemo />
          </ThemeContext.Provider>
        </div>
        <div className="demo-container"><CounterReducerDemo /></div>
      </div>
    </div>
  );
}


function CounterDemo() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h4>useState Counter</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

function TimerDemo() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>⏱ Time: {time}s</p>;
}

function InputFocusDemo() {
  const inputRef = useRef(null);
  return (
    <>
      <h4>useRef Focus</h4>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}

function ThemedButtonDemo() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h4>useContext Theme</h4>
      <button style={{ 
        background: theme === "dark" ? "#333" : "#eee", 
        color: theme === "dark" ? "white" : "black",
        padding: "10px 20px",
        borderRadius: "6px"
      }}>
        {theme} Mode
      </button>
    </>
  );
}

function CounterReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h4>useReducer Counter</h4>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export default HooksComponent;
