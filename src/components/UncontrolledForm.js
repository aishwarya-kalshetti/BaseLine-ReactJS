import React, { useRef } from "react";
import "../App.css";

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form Submitted!\nName: ${nameRef.current.value}\nEmail: ${emailRef.current.value}\nPassword: ${passwordRef.current.value}\nAge: ${ageRef.current.value}`
    );
  };

  return (
    <div className="component-wrapper">
      
      <div className="theory-container">
        <h2 className="section-title"> Theory</h2>
        <p>
          An <b>Uncontrolled Form</b> uses <code>refs</code> to directly access form
          values, instead of storing them in React state.
        </p>
      </div>

      
      <div className="implementation-container">
        <h2 className="section-title"> Implementation</h2>
        <pre className="code-block">{`
const nameRef = useRef();

<form onSubmit={handleSubmit}>
  <input type="text" ref={nameRef} />
</form>
        `}</pre>
      </div>

      
      <div className="demo-box">
        <h2 className="section-title"> Demo</h2>
        <form className="styled-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" ref={nameRef} placeholder="Enter your name" />

          <label>Email:</label>
          <input type="email" ref={emailRef} placeholder="Enter your email" />

          <label>Password:</label>
          <input type="password" ref={passwordRef} placeholder="Enter password" />

          <label>Age:</label>
          <input type="number" ref={ageRef} placeholder="Enter your age" />

          <button type="submit">Submit</button>
        </form>

        
        <div className="output-box">
          <p><b>Entered Data will be shown in alert after Submit</b></p>
        </div>
      </div>
    </div>
  );
}

export default UncontrolledForm;
