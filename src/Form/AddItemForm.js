import React from "react";

// a form with an input and a submit button to add items to the list

export default class AddItemForm extends React.Component {
  // prevent default submission of the form
  onSubmitForm = (e) => {
    e.preventDefault();
    // e.target['inputName'] references `<input name='inputName' />`
    // pass in the value of the input form into the onAddItem callback props
    this.props.onAddItem(e.target.add.value);
  };

  // buttons are not wired up, not functional yet
  render() {
    return (
      <form className="form">
        <label htmlFor="add" className="add-form" id="add-form">
          Add Item
        </label>
        <input
          type="text"
          className="add"
          id="add"
          placeholder="carrots"
          aria-label="Shopping list item"
          min={1}
          name="add"
        ></input>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}
