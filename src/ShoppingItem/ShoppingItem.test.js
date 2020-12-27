import React from "react";
import ReactDOM from "react-dom";
import ShoppingItem from "./ShoppingItem";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ShoppingList from "../ShoppingList/ShoppingList";

describe("ShoppingItem Component", () => {
  // start with a smoke test inside a describe block; does the component render properly without errors
  it("should render without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShoppingItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //SNAPSHOT TESTS BELOW USING ENZYME
  it("should render empty given no item", () => {
    // nothing should render
    const wrapper = shallow(<ShoppingItem />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render the item when supplied", () => {
    // we're adding props to the ShoppingItem for different test cases
    // create a test item with a name and checked key
    const testItem = { name: "test-item", checked: false };
    // this test item should be passed in as a prop to the ShoppingItem component
    const wrapper = shallow(<ShoppingItem item={testItem} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should strike through checked items", () => {
    // pass in a prop where the checked is true
    const testItem = { name: "checked-item", checked: true };
    const wrapper = shallow(<ShoppingItem item={testItem} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
