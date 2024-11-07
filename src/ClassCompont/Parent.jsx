import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    name: "raju",
    age: "25",
    class: "EC1",
  };

  render() {
    return (
      <>
        <Child state={this.state}></Child>
      </>
    );
  }
}
