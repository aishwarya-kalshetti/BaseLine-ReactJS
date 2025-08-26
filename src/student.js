//import React from "react"; 
import {Component} from "react";    //used for class component

// function Student(){
//     return <h1>Hello Rahul</h1>;
// }



// const student = () => {
//   return <h1>Hello Rahul</h1>;
// };

//using props in functional component
// const student = (props) => {
//   return (
//   <div>
//     <h1>Hello {props.name}</h1>
//     <h2>Roll no: {props.roll}</h2>

//   </div>
//   );
// };

//using props in class component

// class student extends Component{
//     render(){
//         return <h1> Hello Rahul</h1>;
//     }
// }

// class student extends Component{
//     render(){
//         return <h1> Hello {this.props.name}</h1>;
//     }
// }


//using state without constructor=> we can directly make changes in props using state

// class student extends Component{
//     state={
//         name:"Rahul",
//         roll:this.props.roll
//     };
//     render(){
//         return <h1>Hello, {this.state.name} Your Roll Number is {this.state.roll}</h1>;
//     }
// }

//using state with constructor

// class student extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:"Rahul",
//             roll:this.props.roll
//         };
//     }
//     render(){
//         return(
//             <h1>
//                 Hello, {this.state.name} Your Roll Number is {this.state.roll}
//             </h1>
//         );
//     }
// }

// const student =(props)=>{
//     return <h1>Hello, {props.name}</h1>;
// }

// export default student;

//React events 
//class

class student extends Component{

    handleClick(){
         console.log("Button Cicked");
    }
    render(){
        return(
            <div>
                <h1>Hello Rahul</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );

    }
}

