import { Component } from "react";
import { Button } from "@material-ui/core";

import Information from "Information";
import { Footer } from "components/Footer";
import { Counter } from "components/Counter";
import { Form } from "components/Form";

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
  };

  logInputValue = () => console.log(this.state.inputValue);

  render() {
    const { apples, bananas, oranges } = this.state;
    return (
      <div>
        <Counter
          name="Fruits"
          count={apples}
          onIncrement={this.incrementFruitHandler("apples")}
        />
        <h1>TOTAL !!! {apples + bananas + oranges} </h1>
        <div>
          <img src={CAT_IMAGE_SRC} alt="cat" width="200" />
        </div>

        <Button variant="contained">Play with the cat</Button>
      </div>
    );
  }
}

export default App;
