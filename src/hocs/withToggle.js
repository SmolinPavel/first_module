import { Component } from "react";

export const withToggle = (WrappedComponent) => {
  // Cat
  return class WithToggle extends Component {
    state = {
      isOpen: false,
    };

    toggle = () => this.setState((state) => ({ isOpen: !state.isOpen }));

    render() {
      const { isOpen } = this.state;

      return (
        <>
          <button type="button" onClick={this.toggle}>
            {this.state.isOpen ? "Hide" : "Show"}
          </button>

          {isOpen && <WrappedComponent {...this.props} />}
        </>
      );
    }
  };
};
