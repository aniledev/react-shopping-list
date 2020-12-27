import React from "react";
import ReactDOM from "react-dom";
import AddItemForm from "./AddItemForm";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("AddItemForm Component", () => {
  // start with a smoke test inside a describe block; does the component render properly without errors
  it("should render without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddItemForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // use enzyme to write a snapshot test: does the component render the form completely
  it("should render the complete form", () => {
    const wrapper = shallow(<AddItemForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
