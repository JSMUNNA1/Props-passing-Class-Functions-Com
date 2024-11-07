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
     this.setState({
      age: 27,
    });
    return (
      <>
        <Child state={this.state} fun={this.fun}></Child>
        <h1>{this.state.age}</h1>
      </>
    );
  }
}
