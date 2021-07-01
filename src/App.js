import { createContext, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Cat from "components/Cat";

export const SmileContext = createContext();
SmileContext.displayName = "SmileContext";

class App extends Component {
  state = {
    smile: "👽",
  };

  render() {
    return (
      <SmileContext.Provider
        value={{
          smile: this.state.smile,
          setSmile: (smile) => this.setState({ smile }),
        }}
      >
        <Router>
          <header>
            <h1>Cat</h1>
          </header>
          <Cat />
        </Router>
      </SmileContext.Provider>
    );
  }
}

export default App;
