import React, { useState } from "react";
import "../App.css";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}\nAge: ${formData.age}`
    );
  };

  return (
    <div className="component-wrapper">
      {/* Theory Section */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory</h2>
        <p>
          A <b>Controlled Form</b> means form data is handled by React state. Every
          input field value is synced with <code>useState</code>.
        </p>
      </div>

      {/* Implementation Section */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>
        <pre className="code-block">{`
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  age: ""
});

<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
/>
        `}</pre>
      </div>

      {/* Demo Section */}
      <div className="demo-box">
        <h2 className="section-title">🚀 Demo</h2>
        <form className="styled-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>

        {/* Display Data */}
        <div className="output-box">
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Password:</b> {formData.password}</p>
          <p><b>Age:</b> {formData.age}</p>
        </div>
      </div>
    </div>
  );
}

export default ControlledForm;
