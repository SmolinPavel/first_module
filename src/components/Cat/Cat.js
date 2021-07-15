import { Component } from "react";
import { Button } from "@material-ui/core";

export class Cat extends Component {
  render() {
    const { image, type } = this.props.cat;
    return (
      <div style={{ padding: "1rem" }}>
        <h3>{type.split(",").join(" ")}</h3>
        <div>
          <img src={image} alt="cat" height="240" />
        </div>
        <Button variant="contained" onClick={() => {}}>
          Play with the cat
        </Button>
      </div>
    );
  }
}
