import React from "react";

export default function ShoppingItem(props) {
  return (
    <li>
      <h2
        // use a ternary operator; if the props.item.checked evalutes to true then apply the line-through text-declaraction, if it doesn't evaluate to true then apply null
        style={{
          textDecoration: props.item.checked ? "line-through" : null,
        }}
      >
        {props.item.name}
      </h2>
      <button type="button" onClick={props.onCheckItem}>
        check
      </button>
      <button type="button" onClick={props.DeleteItem}>
        delete
      </button>
    </li>
  );
}

ShoppingItem.defaultProps = {
  item: {},
};
