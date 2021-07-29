import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import classnames from "classnames";
import jwtDecode from "jwt-decode";

import { getStore } from "store";

import { Auth } from "components/Auth";
import Counter from "components/Counter";
import { CatList } from "components/CatList";

const store = getStore();

class App extends Component {
  state = {
    active: false,
  };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { active } = this.state;

    // TODO delete
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    return (
      <Provider store={store}>
        <Router>
          <Auth />
          <hr />
          <h2
            className={classnames({
              "active-link": active,
            })}
            onClick={this.handleClick}
          >
            Counter
          </h2>
          <Counter />
          <hr />
          <CatList />
        </Router>
      </Provider>
    );
  }
}

export default App;
