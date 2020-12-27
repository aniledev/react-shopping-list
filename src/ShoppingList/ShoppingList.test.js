import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ShoppingList from "./ShoppingList";

describe("ShoppingList Component", () => {
  // start with a smoke test inside a describe block; does the component render properly without errors
  it("should render without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShoppingList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // if there are no items in the array, then nothing should render
  it("should render empty given no items", () => {
    const wrapper = shallow(<ShoppingList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it should render multiple items when supplied with a proper array of items
  it("should render ShoppingItem when supplied with an items prop", () => {
    const testItems = [
      { name: "test item 1", checked: false },
      { name: "another test item", checked: true },
      { name: "test item number 3", checked: false },
    ];
    const wrapper = shallow(<ShoppingList items={testItems} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
