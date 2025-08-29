// import logo from './logo.svg';
// import './App.css';
//import React from "react";

// import Guest from './ConditionalStatements.js/Guest';
// import User from './ConditionalStatements.js/user';


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import ComponentAPI from "./components/ComponentAPI";
import LifecycleExample from "./components/LifecycleExample";
import PropsExample from "./components/PropsExample";
import WithConstructor from "./components/WithConstructor";
import WithoutConstructor from "./components/WithoutConstructor";
import EventExample from "./components/EventExample";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import IfElseExample from "./components/IfElseExample";
import TernaryExample from "./components/TernaryExample";
import LogicalAndExample from "./components/LogicalAndExample";
import ListKeyRefsExample from "./components/ListKeyRefsExample";
import RefsComponent from "./components/RefsComponents";


import HooksComponent from "./components/HooksComponent";
import CoreConcepts from "./components/CoreConcepts";
import AdvancedHooks from "./components/AdvancedHooks";
import StylingInReact from "./components/StylingInReact";
import StateManagement from "./components/StateManagement";
import ApiDataHandling from "./components/ApiDataHandling";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

 
  const matchSearch = (text) => {
    if (!search) return true;
    return text.toLowerCase().includes(search.toLowerCase());
  };

  const matchFilter = (section) => {
    return filter === "All" || filter === section;
  };

  return (
    <Router>
      
      <div className="app-container">
        
        <nav className="navbar">
          <div className="navbar-card">
            <h2>React Study Platform</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/functional">Functional Component</Link></li>
              <li><Link to="/class">Class Component</Link></li>
              <li><Link to="/api">Component API</Link></li>
              <li><Link to="/lifecycle">Lifecycle</Link></li>
              <li><Link to="/props">Props</Link></li>
              <li><Link to="/with-constructor">State (Constructor)</Link></li>
              <li><Link to="/without-constructor">State (No Constructor)</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/controlled-form">Controlled Form</Link></li>
              <li><Link to="/uncontrolled-form">Uncontrolled Form</Link></li>
              <li><Link to="/ifelse">If Else</Link></li>
              <li><Link to="/ternary">Ternary</Link></li>
              <li><Link to="/logical">Logical &&</Link></li>
              <li><Link to="/list">List & Keys</Link></li>
              <li><Link to="/Refs">Refs</Link></li>
              <li><Link to="/hooks">Hooks</Link></li>
              <li><Link to="/core">Core Concepts</Link></li>
              <li><Link to="/adv-hooks">Advanced Hooks</Link></li>
              <li><Link to="/styling">Styling in React</Link></li>
              <li><Link to="/state">State Management</Link></li>
              <li><Link to="/api-data">API & Data Handling</Link></li>
            </ul>
          </div>
        </nav>

       
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                
                  
                  <div className="search-filter">
                    <input
                      type="text"
                      placeholder="Search topics..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="search-bar"
                    />
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="filter-dropdown"
                    >
                      <option value="All">All Sections</option>
                      <option value="Components">Components</option>
                      <option value="API">Component API</option>
                      <option value="Lifecycle">Lifecycle</option>
                      <option value="PropsState">Props & State</option>
                      <option value="Events">Events</option>
                      <option value="Forms">Forms</option>
                      <option value="Conditional">Conditional Rendering</option>
                      <option value="ListRefs">List & Refs</option>
                      <option value="Hooks">Hooks</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  

                 
                  {matchFilter("Components") && (
                    <section className="section">
                      <h2 className="section-title">Components</h2>
                      <div className="card-grid">
                        {matchSearch("Functional Component") && (
                          <Link to="/functional" className="card">Functional Component</Link>
                        )}
                        {matchSearch("Class Component") && (
                          <Link to="/class" className="card">Class Component</Link>
                        )}
                      </div>
                    </section>
                  )}

                  

                 
                  {matchFilter("API") && (
                    <section className="section">
                      <h2 className="section-title">Component API</h2>
                      <div className="card-grid">
                        {matchSearch("Component API") && (
                          <Link to="/api" className="card">Component API Example</Link>
                        )}
                      </div>
                    </section>
                  )}

                  
                  {matchFilter("Lifecycle") && (
                    <section className="section">
                      <h2 className="section-title">Component Lifecycle</h2>
                      <div className="card-grid">
                        {matchSearch("Lifecycle") && (
                          <Link to="/lifecycle" className="card">Lifecycle Example</Link>
                        )}
                      </div>
                    </section>
                  )}

                  
                  {matchFilter("PropsState") && (
                    <section className="section">
                      <h2 className="section-title">Props & State</h2>
                      <div className="card-grid">
                        {matchSearch("Props") && (
                          <Link to="/props" className="card">Props Example</Link>
                        )}
                        {matchSearch("State With Constructor") && (
                          <Link to="/with-constructor" className="card">State With Constructor</Link>
                        )}
                        {matchSearch("State Without Constructor") && (
                          <Link to="/without-constructor" className="card">State Without Constructor</Link>
                        )}
                      </div>
                    </section>
                  )}

                  
                  {matchFilter("Events") && (
                    <section className="section">
                      <h2 className="section-title">Events</h2>
                      <div className="card-grid">
                        {matchSearch("Event") && (
                          <Link to="/events" className="card">Event Handling</Link>
                        )}
                      </div>
                    </section>
                  )}

                 
                  {matchFilter("Forms") && (
                    <section className="section">
                      <h2 className="section-title">Forms</h2>
                      <div className="card-grid">
                        {matchSearch("Controlled Form") && (
                          <Link to="/controlled-form" className="card">Controlled Form</Link>
                        )}
                        {matchSearch("Uncontrolled Form") && (
                          <Link to="/uncontrolled-form" className="card">Uncontrolled Form</Link>
                        )}
                      </div>
                    </section>
                  )}

                  
                  {matchFilter("Conditional") && (
                    <section className="section">
                      <h2 className="section-title">Conditional Rendering</h2>
                      <div className="card-grid">
                        {matchSearch("If Else") && (
                          <Link to="/ifelse" className="card">If Else</Link>
                        )}
                        {matchSearch("Ternary") && (
                          <Link to="/ternary" className="card">Ternary Operator</Link>
                        )}
                        {matchSearch("Logical") && (
                          <Link to="/logical" className="card">Logical &&</Link>
                        )}
                      </div>
                    </section>
                  )}

                 
                  {matchFilter("ListRefs") && (
                    <section className="section">
                      <h2 className="section-title">List, Keys & Refs</h2>
                      <div className="card-grid">
                        {matchSearch("List") && (
                          <Link to="/list" className="card">List & Keys</Link>
                        )}
                        {matchSearch("Refs") && (
                          <Link to="/Refs" className="card">Refs</Link>
                        )}
                      </div>
                    </section>
                  )}

                 
                  {matchFilter("Hooks") && (
                    <section className="section">
                      <h2 className="section-title">React Hooks</h2>
                      <div className="card-grid">
                        {matchSearch("Hooks") && (
                          <Link to="/hooks" className="card">Basic Hooks</Link>
                        )}
                        {matchSearch("Advanced Hooks") && (
                          <Link to="/adv-hooks" className="card">Advanced Hooks</Link>
                        )}
                      </div>
                    </section>
                  )}

                 
                  {matchFilter("Advanced") && (
                    <section className="section">
                      <h2 className="section-title">Advanced Topics</h2>
                      <div className="card-grid">
                        {matchSearch("Core") && (
                          <Link to="/core" className="card">Core Concepts</Link>
                        )}
                        {matchSearch("Styling") && (
                          <Link to="/styling" className="card">Styling in React</Link>
                        )}
                        {matchSearch("State Management") && (
                          <Link to="/state" className="card">State Management</Link>
                        )}
                        {matchSearch("API") && (
                          <Link to="/api-data" className="card">API & Data Handling</Link>
                        )}
                      </div>
                    </section>
                  )}
                </>
              }
            />

          
            <Route path="/functional" element={<FunctionalComponent />} />
            <Route path="/class" element={<ClassComponent />} />
            <Route path="/api" element={<ComponentAPI />} />
            <Route path="/lifecycle" element={<LifecycleExample />} />
            <Route path="/props" element={<PropsExample name="React Student" />} />
            <Route path="/with-constructor" element={<WithConstructor />} />
            <Route path="/without-constructor" element={<WithoutConstructor />} />
            <Route path="/events" element={<EventExample />} />
            <Route path="/controlled-form" element={<ControlledForm />} />
            <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
            <Route path="/ifelse" element={<IfElseExample />} />
            <Route path="/ternary" element={<TernaryExample />} />
            <Route path="/logical" element={<LogicalAndExample />} />
            <Route path="/list" element={<ListKeyRefsExample />} />
            <Route path="/Refs" element={<RefsComponent />} />

            
            <Route path="/hooks" element={<HooksComponent />} />
            <Route path="/core" element={<CoreConcepts />} />
            <Route path="/adv-hooks" element={<AdvancedHooks />} />
            <Route path="/styling" element={<StylingInReact />} />
            <Route path="/state" element={<StateManagement />} />
            <Route path="/api-data" element={<ApiDataHandling />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;













// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App=()=>{
//   return(
//     <div>
//       <Student name="Samarth"/>
//       <Student name="Aishwarya" />
//       <Student name="Madhura" />

//     </div>
//   );
// };




