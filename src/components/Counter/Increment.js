import { createRef, PureComponent } from "react";
import PropTypes from "prop-types";

export class Increment extends PureComponent {
  constructor(props) {
    super(props);
    console.log("constructor: A new instance of Increment!");
  }

  myFirstRef = createRef();

  static propTypes = {
    name: PropTypes.string,
  };

  state = {
    value: 0,
  };

  intervalId = null;

  updateValue = () => {
    this.setState({ value: this.state.value + 3 });
  };

  componentDidMount() {
    console.log("component did mount");
    this.intervalId = setInterval(() => console.log("kvas"), 2000);
  }

  componentWillUnmount() {
    console.log("component will unmount");
    // clearInterval(this.intervalId);
  }

  render() {
    console.log("render");
    return (
      <div>
        <input ref={this.myFirstRef} />
        <button onClick={this.updateValue}>+++</button>
        <p>Value = {this.state.value}</p>
      </div>
    );
  }
}
