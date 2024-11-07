import { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    return (
      <>
        <div>
          <h1>{this.props.state.name}</h1>
          <button
            onClick={() => {
              this.props.fun(44);
            }}
          >
            Change value
          </button>
        </div>
      </>
    );
  }
}
