// src/components/StylingInReact.js
import React from "react";
import "../App.css";
import styles from "./Button.module.css"; // CSS Module

function StylingInReact() {
  const inlineBox = {
    padding: 12,
    borderRadius: 10,
    background: "#eef6fb",
    border: "1px dashed #0077cc",
    marginTop: 8,
  };

  return (
    <div className="component-wrapper">
      {/* Theory */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory (Styling in React)</h2>
        <ul>
          <li><b>Global CSS</b>: import a .css file once (you already use App.css).</li>
          <li><b>Inline Styles</b>: JS objects → quick, component-scoped.</li>
          <li><b>CSS Modules</b>: <code>Something.module.css</code> → locally scoped class names.</li>
          <li><b>Utility frameworks</b>: Tailwind, etc. (optional).</li>
        </ul>
      </div>

      {/* Implementation */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>

        <h3>1) Inline Style</h3>
        <pre className="code-block">{`
const box = { padding: 12, borderRadius: 10, background: "#eef6fb" };
return <div style={box}>Inline styled box</div>;
        `}</pre>

        <h3>2) CSS Modules</h3>
        <pre className="code-block">{`
// Button.module.css
.primary { padding: 10px 16px; border-radius: 8px; background: #6a11cb; color: #fff; }
.outline { padding: 10px 16px; border-radius: 8px; border: 2px solid #6a11cb; color: #6a11cb; background: transparent; }

// JSX
import styles from "./Button.module.css";
<button className={styles.primary}>Primary</button>
<button className={styles.outline}>Outline</button>
        `}</pre>
      </div>

      {/* Demo */}
      <div className="demo-box">
        <h2 className="section-title">🚀 Demo</h2>

        <h4>Inline Style</h4>
        <div style={inlineBox}>This box uses inline styles.</div>

        <h4 style={{ marginTop: 16 }}>CSS Modules</h4>
        <button className={styles.primary}>Primary Button</button>
        <button className={styles.outline}>Outline Button</button>
      </div>
    </div>
  );
}

export default StylingInReact;
