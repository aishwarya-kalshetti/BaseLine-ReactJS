// src/components/StateManagement.js
import React, { createContext, useContext, useReducer } from "react";
import "../App.css";

/* ---------- Global store with Context + useReducer ---------- */
const CounterContext = createContext();

function counterReducer(state, action) {
  switch (action.type) {
    case "inc": return { ...state, value: state.value + 1 };
    case "dec": return { ...state, value: state.value - 1 };
    case "setStep": return { ...state, step: action.step };
    default: return state;
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { value: 0, step: 1 });
  const store = { state, dispatch };
  return <CounterContext.Provider value={store}>{children}</CounterContext.Provider>;
}

/* ---------- Page Component ---------- */
function StateManagement() {
  return (
    <div className="component-wrapper">
      {/* Theory */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory (State Management)</h2>
        <ul>
          <li><b>Local State</b>: useState per component.</li>
          <li><b>Context + Reducer</b>: app-wide store without external libs.</li>
          <li><b>Libraries</b>: Redux, Zustand, Jotai for bigger apps.</li>
        </ul>
      </div>

      {/* Implementation */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>
        <pre className="code-block">{`
// Store
const CounterContext = createContext();
function counterReducer(state, action) {...}
function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { value: 0, step: 1 });
  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
}

// Using it
function Controls() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <span>{state.value}</span>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </>
  );
}
        `}</pre>
      </div>

      {/* Demo */}
      <div className="demo-box demo-list">
        <h2 className="section-title">🚀 Demo (Context + Reducer)</h2>
        <CounterProvider>
          <Controls />
          <StepSetter />
        </CounterProvider>
      </div>
    </div>
  );
}

/* ---------- DEMOS ---------- */
function Controls() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <button onClick={() => dispatch({ type: "dec" })}>- {state.step}</button>
      <span style={{ minWidth: 80, textAlign: "center", fontWeight: 700 }}>Value: {state.value}</span>
      <button onClick={() => dispatch({ type: "inc" })}>+ {state.step}</button>
    </div>
  );
}

function StepSetter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div style={{ marginTop: 12 }}>
      <label>Step:&nbsp;</label>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ type: "setStep", step: Number(e.target.value || 1) })}
        style={{ width: 80 }}
      />
      <p style={{ marginTop: 8, color: "#0077cc" }}>
        Changes apply to +/- buttons globally.
      </p>
    </div>
  );
}

export default StateManagement;
