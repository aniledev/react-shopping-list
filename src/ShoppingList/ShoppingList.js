import React from "react";
import ShoppingItem from "../ShoppingItems/ShoppingItems";

// an individual item within the list that contains a check button and delete button. There will be 0 or more of these

export default function ShoppingList(props) {
  ShoppingList.defaultProps = {
    items: [],
  };

  return (
    <ul>
      {/* map over each item in the props that are passed down and create a ShoppingItem component */}
      {props.items.map((item, index) => (
        <ShoppingItem key={index} item={item} />
      ))}
    </ul>
  );
}
