import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "store";

import Cat from "components/Cat";
import Counter from "components/Counter";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Cat />
          <hr />
          <Counter />
        </Router>
      </Provider>
    );
  }
}

export default App;
