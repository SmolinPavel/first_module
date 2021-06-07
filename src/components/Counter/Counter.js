import { Component } from "react";
import { Increment } from "./Increment";

export class Counter extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name} {this.props.count}
        </h1>
        <div>
          <Increment onClick={this.props.onIncrement} />
        </div>
      </div>
    );
  }
}

Counter.defaultProps = {
  name: "Banana 🍌",
};
