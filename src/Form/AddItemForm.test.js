import React from "react";
import ReactDOM from "react-dom";
import AddItemForm from "./AddItemForm";

describe("AddItemForm Component", () => {
  // start with a smoke test inside a describe block; does the component render properly without errors
  it("should render without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddItemForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
