// src/components/AdvancedHooks.js
import React, { useCallback, useMemo, useReducer, useState, useEffect } from "react";
import "../App.css";

/* ---------- custom hook example ---------- */
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

/* ---------- useReducer setup ---------- */
const initialTodos = [
  { id: 1, text: "Learn React", done: false },
  { id: 2, text: "Study Hooks", done: true },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "toggle":
      return state.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
    case "clear":
      return [];
    default:
      return state;
  }
}

function AdvancedHooks() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [query, setQuery] = useLocalStorage("query", "");
  const [count, setCount] = useState(0);

  // useCallback: stable handler reference
  const addTodo = useCallback(() => {
    if (query.trim()) dispatch({ type: "add", text: query });
    setQuery("");
  }, [query, setQuery]);

  // useMemo: derived/computed values
  const doneCount = useMemo(() => todos.filter(t => t.done).length, [todos]);

  return (
    <div className="component-wrapper">
      {/* Theory */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory (Advanced Hooks)</h2>
        <ul>
          <li><b>useReducer</b>: complex state updates via reducer.</li>
          <li><b>useMemo</b>: memoize expensive calculations.</li>
          <li><b>useCallback</b>: memoize callback functions.</li>
          <li><b>Custom Hooks</b>: share reusable logic across components.</li>
        </ul>
      </div>

      {/* Implementation */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>

        <h3>1) useReducer</h3>
        <pre className="code-block">{`
function todoReducer(state, action) {
  switch (action.type) {
    case "add": return [...state, { id: Date.now(), text: action.text, done: false }];
    case "toggle": return state.map(t => t.id === action.id ? { ...t, done: !t.done } : t);
    default: return state;
  }
}
const [todos, dispatch] = useReducer(todoReducer, []);
        `}</pre>

        <h3>2) useMemo</h3>
        <pre className="code-block">{`
const doneCount = useMemo(() => todos.filter(t => t.done).length, [todos]);
        `}</pre>

        <h3>3) useCallback</h3>
        <pre className="code-block">{`
const addTodo = useCallback(() => {
  dispatch({ type: "add", text: input });
}, [input]);
        `}</pre>

        <h3>4) Custom Hook (useLocalStorage)</h3>
        <pre className="code-block">{`
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key)) ?? initialValue);
  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue];
}
        `}</pre>
      </div>

      {/* Demo */}
      <div className="demo-box demo-hook">
        <h2 className="section-title">🚀 Demo</h2>

        <div style={{ display: "grid", gap: 12 }}>
          <div>
            <h4>useReducer + useMemo</h4>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="New todo..."
            />
            <div>
              <button onClick={addTodo}>Add</button>
              <button onClick={() => dispatch({ type: "clear" })}>Clear All</button>
            </div>
            <ul style={{ paddingLeft: 18 }}>
              {todos.map(t => (
                <li key={t.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={t.done}
                      onChange={() => dispatch({ type: "toggle", id: t.id })}
                    />{" "}
                    <span style={{ textDecoration: t.done ? "line-through" : "none" }}>
                      {t.text}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            <p><b>Completed:</b> {doneCount} / {todos.length}</p>
          </div>

          <div>
            <h4>useCallback (stable handler)</h4>
            <button onClick={() => setCount(c => c + 1)}>Re-render Parent ({count})</button>
            <Child onAction={addTodo} />
            <p style={{fontSize: 12, color: "#666"}}>Tip: addTodo keeps the same reference unless its deps change.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* small child to show useCallback stability */
const Child = React.memo(function Child({ onAction }) {
  return (
    <div style={{ marginTop: 8 }}>
      <button onClick={onAction}>Child triggers Add (memoized)</button>
    </div>
  );
});

export default AdvancedHooks;
