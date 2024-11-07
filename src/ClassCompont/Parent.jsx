import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
 constructor(props) {
    super(props);
    this.state = {
      name: "raju",
      age: "25",
      class: "EC1",
    };
  }
  fun = (val) => {
    this.setState({
      age: val,
    });
    console.log("22");
  };

  render() {
   
    return (
      <>
        <Child state={this.state} fun={this.fun} fun2={this.setState.bind(this)} childern={<Child2></Child2>}></Child> 
        {/* you can pass anything as a props. Like:object, any premitiveValue,Component ,etc..*/}
        <h1>{this.state.age}</h1>
      </>
    );
  }
}
