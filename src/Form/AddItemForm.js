import React from "react";

// a form with an input and a submit button to add items to the list

export default class AddItemForm extends React.Component {
  // buttons are not wired up, not functional yet
  render() {
    return (
      <form className="form">
        <label htmlFor="add-item" className="add-form" id="add-form">
          Add Item
        </label>
        <input
          type="text"
          className="add-item"
          id="add-item"
          placeholder="carrots"
          aria-label="Shopping list item"
          min={1}
        ></input>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}
