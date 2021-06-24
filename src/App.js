import { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Loader } from "./Loader";

const AsyncCat = lazy(() =>
  import("components/Cat" /* webpackChunkName: "catChunk" */)
);

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <h1>Cat</h1>
        </header>
        <Suspense fallback={<Loader />}>
          <AsyncCat />
        </Suspense>
      </Router>
    );
  }
}

export default App;
