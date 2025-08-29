import React, { useRef, Component } from "react";
import "../App.css";

function RefsComponent() {
  return (
    <div className="component-wrapper">
      
      <div className="theory-container">
        <h2 className="section-title"> Theory</h2>
        <p>
          Refs in React allow direct access to DOM elements or child components
          without re-rendering.
        </p>
        <ul>
          <li>Useful for input focus, animations, integrating with libraries.</li>
          <li>Created using <code>useRef</code> in functional components.</li>
          <li>Use <code>React.createRef()</code> in class components.</li>
        </ul>
      </div>

      
      <div className="implementation-container">
        <h2 className="section-title"> Implementation</h2>

        <h3>1. useRef Hook</h3>
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

        <h3>2. Class Component with Ref</h3>
        <pre className="code-block">{`
class InputFocus extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  focusInput = () => this.inputRef.current.focus();
  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus</button>
      </div>
    );
  }
}
        `}</pre>
      </div>

      
      <div className="demo-box">
        <h2 className="section-title"> Demo</h2>
        <InputFocusDemo />
        <ClassInputFocusDemo />
      </div>
    </div>
  );
}


function InputFocusDemo() {
  const inputRef = useRef(null);
  return (
    <div className="styled-ref-box">
      <label>Functional Input:</label>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}

class ClassInputFocusDemo extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  focusInput = () => this.inputRef.current.focus();
  render() {
    return (
      <div className="styled-ref-box">
        <label>Class Component Input:</label>
        <input ref={this.inputRef} placeholder="Type here..." />
        <button onClick={this.focusInput}>Focus</button>
      </div>
    );
  }
}

export default RefsComponent;
