import React from "react";
import "../App.css";

function ListAndKeys() {
  return (
    <div className="component-wrapper">

      {/* Theory */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory</h2>
        <p>
          Lists in React render multiple elements. Each item should have a 
          <b> unique key </b> to help React identify changes efficiently.
        </p>
        <ul>
          <li>Use <code>map()</code> to render lists.</li>
          <li>Always add <code>key</code> prop (usually an ID).</li>
        </ul>
      </div>

      {/* Implementation */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>

        <h3>1. Simple List</h3>
        <pre className="code-block">{`
function FruitList() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
        `}</pre>

        <h3>2. List with Objects</h3>
        <pre className="code-block">{`
function StudentList() {
  const students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aishwarya" },
  ];
  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}
        `}</pre>
      </div>

      {/* Demo */}
      <div className="demo-box">
        <h2 className="section-title">🚀 Demo</h2>
        <FruitListDemo />
        <StudentListDemo />
      </div>
    </div>
  );
}

/* -------------------- DEMO COMPONENTS -------------------- */
function FruitListDemo() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <div className="styled-list-box">
      <h4>Fruit List</h4>
      <ul className="styled-list">
        {fruits.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

function StudentListDemo() {
  const students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aishwarya" }
  ];
  return (
    <div className="styled-list-box">
      <h4>Student List</h4>
      <ul className="styled-list">
        {students.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListAndKeys;
