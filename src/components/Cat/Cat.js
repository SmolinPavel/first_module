import React from "react";
import { Button } from "@material-ui/core";

const CAT_IMAGE_SRC =
  "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg";

class Cat extends React.Component {
  render() {
    return (
      <div>
        <h1>MR Cat</h1>
        <div>
          <img src={CAT_IMAGE_SRC} alt="cat" width="200" />
        </div>
        <Button variant="contained" onClick={() => {}}>
          Play with the cat
        </Button>
      </div>
    );
  }
}

export default Cat;
