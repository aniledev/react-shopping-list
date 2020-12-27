import React from "react";

// a list containing all of the items

export default function ShoppingItems (props) {
  ShoppingItems.defaultProps = {
    item: {}
  };
  
  return (
    <li>
      <h2 style {{ textDecoration: props.item.checked ? "line-through" : null, }}>{props.item.name}</h2>
      <button type="button">check</button>
      <button type="button">delete</button>
    </li>
  );
}
