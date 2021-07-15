import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "store";

import Counter from "components/Counter";
import { CatList } from "components/CatList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <hr />
          <h2>Counter</h2>
          <Counter />
          <hr />
          <CatList />
        </Router>
      </Provider>
    );
  }
}

export default App;
