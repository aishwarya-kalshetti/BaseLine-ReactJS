//import React from "react";
//import React, { Component } from "react";

//Functional component event handling

import React, { Component } from "react";
import "../App.css";

class Events extends Component {
  constructor() {
    super();
    this.state = { message: "Click a button!" };

    // Method 1: Binding in constructor
    this.handleClick1 = this.handleClick1.bind(this);
  }

  // Method 1: Normal function + bind
  handleClick1() {
    this.setState({ message: "Handled with binding in constructor ✅" });
  }

  // Method 2: Arrow function (no binding needed)
  handleClick2 = () => {
    this.setState({ message: "Handled with arrow function ✅" });
  };

  // Method 3: Inline arrow in JSX
  render() {
    return (
      <div className="component-wrapper">
        {/* Theory */}
        <div className="theory-container">
          <h2 className="section-title">📘 Theory</h2>
          <p>
            Events in React work like normal DOM events but follow JSX syntax.  
            Methods to handle events:
          </p>
          <ul>
            <li>Binding in constructor</li>
            <li>Class property arrow function</li>
            <li>Inline arrow function</li>
          </ul>
        </div>

        {/* Implementation */}
        <div className="implementation-container">
          <h2 className="section-title">⚡ Implementation</h2>
          <pre className="code-block">{`
class Events extends Component {
  constructor() {
    super();
    this.state = { message: "Click me" };
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick1() { ... }   // Bound in constructor
  handleClick2 = () => { ... }   // Arrow property
  render() {
    return (
      <>
        <button onClick={this.handleClick1}>Click 1</button>
        <button onClick={this.handleClick2}>Click 2</button>
        <button onClick={() => this.setState({ message: "Inline handler" })}>Click 3</button>
      </>
    );
  }
}
          `}</pre>
        </div>

        {/* Demo */}
        <div className="demo-box">
          <h2 className="section-title">🚀 Demo</h2>
          <p style={{ color: "#0077cc" }}>{this.state.message}</p>
          <button onClick={this.handleClick1}>Click 1 (Bind)</button>
          <button onClick={this.handleClick2}>Click 2 (Arrow)</button>
          <button onClick={() => this.setState({ message: "Handled inline ✅" })}>
            Click 3 (Inline)
          </button>
        </div>
      </div>
    );
  }
}

export default Events;


// function EventExample() {
//   function handleClick (e) { 
//     //alert("Button clicked!");
//     e.preventDefault();
//   console.log("Button Clicked");
//   }

//   return (
//     <div>
//       <h2>Event Example</h2>
//       <a href="http:www.geekyshows.com" onClick={handleClick}>Click Me</a>
//     </div>
//   );
// }



//class component event handling

// class EventExample extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:"Raj",
//             roll:this.props.roll
//         }
//         this.handleClick=this.handleClick.bind(this);

//     }

//     handleClick(){
//         console.log("Button Clicked",this);
//     }

//     //use bind or arrow function to use this keyword
//     // handleClick=()=>{
//     //     console.log("Button Clicked",this);
//     // }
//     render(){
//         return(
//             <div>
//                 <h1>Hello,  {this.state.name} and Your roll no is {this.state.roll}</h1>
//                 <button onClick={this.handleClick}>Click Me!</button>
//             </div>
//         );
//     }
// }

// export default EventExample;
