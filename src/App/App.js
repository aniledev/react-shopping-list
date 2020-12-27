import "./App.css";
import AddItemForm from "../Form/AddItemForm";
import ShoppingList from "../ShoppingList/ShoppingList";
import ShoppingItems from "../ShoppingItems/ShoppingItems";

function App() {
  return (
    <div className="App">
      <AddItemForm className="Form" />
      <ShoppingList className="ShoppingList" />
      <ShoppingItems className="ShoppingItems" />
    </div>
  );
}

export default App;
