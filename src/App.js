import { Component } from "react";
import { Button } from "@material-ui/core";

import Information from "Information";
import { Footer } from "components/Footer";
import { Counter } from "components/Counter";

const CAT_IMAGE_SRC =
  "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg";

const tasks = ["learn React", "stay healthy", "Make people happy"];

class App extends Component {
  state = {
    apples: 0,
    bananas: 0,
    oranges: 0,
  };

  incrementFruitHandler = (fruit /* apples */) => () => {
    this.setState({ [fruit]: this.state[fruit] + 1 });
    // returns () => this.setState({ apples: this.state.apples + 1 });
  };

  render() {
    const { apples, bananas, oranges } = this.state;
    return (
      <div>
        <h1>TOTAL !!! {apples + bananas + oranges} </h1>
        <Counter
          count={apples}
          onIncrement={this.incrementFruitHandler("apples")}
          name="Apple 🍏"
        />
        <Counter
          count={oranges}
          onIncrement={this.incrementFruitHandler("oranges")}
          name="Orange 🍊"
        />
        <Counter
          count={bananas}
          onIncrement={this.incrementFruitHandler("bananas")}
        />
        <div>
          <img src={CAT_IMAGE_SRC} alt="cat" width="200" />
        </div>

        <Button variant="contained">Play with the cat</Button>
        <Information>
          <h1>My plan!</h1>
          <ul>
            {tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </Information>
        <Footer
          first={20}
          second={2}
          user={{
            name: "Denys",
            state: "Happy",
            questions: 20,
          }}
        />
      </div>
    );
  }
}

export default App;
