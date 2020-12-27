import "./App.css";
import Form from "../Form/Form";
import ShoppingList from "../ShoppingList/ShoppingList";
import ShoppingItems from "../ShoppingItems/ShoppingItems";

function App() {
  return (
    <div className="App">
      <Form className="Form" />
      <ShoppingList className="ShoppingList" />
      <ShoppingItems className="ShoppingItems" />
    </div>
  );
}

export default App;
