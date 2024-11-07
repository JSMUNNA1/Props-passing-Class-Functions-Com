import { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <>
        <div>
          <h1>{this.props.state.name}h1</h1>
        </div>
      </>
    );
  }
}
