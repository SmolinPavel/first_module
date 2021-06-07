import { Component } from "react";

export class Increment extends Component {
  render() {
    console.log("render increment");
    return (
      <button
        onClick={() => {
          console.log("click handler from increment");
          this.props.onClick();
        }}
      >
        Increment
      </button>
    );
  }
}
