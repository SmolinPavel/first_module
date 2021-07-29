import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { getStore } from "store";
import Counter from "components/Counter";

it("should decrement when minus is clicked", () => {
  const { getByText } = render(
    <Provider store={getStore()}>
      <Counter />,
    </Provider>
  );

  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  const updatedValue = getByText("-1");

  expect(updatedValue).toBeTruthy();
});

it("should increment when plus button is clicked", () => {
  const { getByText } = render(
    <Provider store={getStore()}>
      <Counter />
    </Provider>
  );

  fireEvent.click(screen.getByText("+"));

  const updatedValue = getByText("1");

  expect(updatedValue).toBeTruthy();
});
