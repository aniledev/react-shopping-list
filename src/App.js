import "./App.css";
import Form from "./Form";
import ShoppingList from "./ShoppingList";
import ShoppingItems from "./ShoppingItems";

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
