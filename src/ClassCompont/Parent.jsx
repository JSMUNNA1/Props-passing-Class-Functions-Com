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

  render() {
     this.setState({
      age: 27,
    });
    return (
      <>
        <Child state={this.state}></Child>
      </>
    );
  }
}
