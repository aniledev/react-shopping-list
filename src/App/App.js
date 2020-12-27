import React from "react";
import "./App.css";
import AddItemForm from "../Form/AddItemForm";
import ShoppingList from "../ShoppingList/ShoppingList";

// this component will contain teh app's title, the add item form, and the shopping list
// it also contains sample state

export default class App extends React.Component {
  // initialize state for App component because its the lowest common ancestor of the components that update and read state
  state = {
    shoppingItem: [
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false },
    ],
  };

  // DON'T FORGET THE USE OF ARROW FUNCTIONS SO WE AVOID UNDEFINED ERRORS
  handleDeleteItem = (item) => {
    // create a new array for the shoppingItem that removes the deleted item
    // use the filter method to create a new array where each item in the new array does equal the item passed in from the delete callback prop
    const newItems = this.state.shoppingItem.filter((itm) => itm !== item);
    // assign the this.state.shoppingItem to the new array that we have filtered
    this.setState({
      shoppingItem: newItems,
    });
  };

  handleCheckItem = (item) => {
    // use the map method to map over the current array
    const newItems = this.state.shoppingItem.map((itm) => {
      // if itm in the current state array is equal to the item passed in from the check callback props, toggle the boolean value of the map
      if (itm === item) {
        itm.checked = !itm.checked;
      }
      return itm;
    });
    // set the state with the new array
    this.setState({
      shoppingItem: newItems,
    });
  };

  // use the spread operator to create a new array with the new object added to the array
  handleAddItem = (itemName) => {
    const newItems = [
      ...this.state.shoppingItem,
      { name: itemName, checked: false },
    ];
    // use this.setState to set the new created array as the new state
    this.setState({
      shoppingItem: newItems,
    });
  };

  render() {
    const { shoppingItem } = this.state;
    // pass this state down as props to the ShoppingList component
    return (
      <>
        <header className="header">
          <h1>Shopping List</h1>
        </header>
        <main className="main">
          <section>
            <AddItemForm onAddItem={this.handleAddItem} />
          </section>
          <section>
            {/* add the two callback props to the component */}
            <ShoppingList
              items={shoppingItem}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    );
  }
}
