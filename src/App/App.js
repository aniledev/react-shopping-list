import React from "react";
import "./App.css";
import AddItemForm from "../Form/AddItemForm";
import ShoppingList from "../ShoppingList/ShoppingList";
import ShoppingItems from "../ShoppingItems/ShoppingItems";

// this component will contain teh app's title, the add item form, and the shopping list
// it also contains sample state

import react from "react";

export default class App extends React.Component {
  // initialize state for App component because its the lowest common ancestor of the components that update and read state
  state = {
    ShoppingItems: [
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false },
    ],
  };
  render() {
    return <div></div>;
  }
}
