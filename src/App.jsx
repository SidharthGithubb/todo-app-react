import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/todoItems";
import ErrorComponent from "./components/ErrorComponent";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const msg = "No items to display";

  const handleNewItem = (itemName, itemDueDate) => {
    const newItem = {
      name: itemName,
      dueDate: itemDueDate,
    };
    const newTodoItems = [...todoItems, newItem];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (itemName) => {
    const updatedItems = todoItems.filter((item) => {
      return item.name !== itemName;
    });
    setTodoItems(updatedItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <ErrorComponent message={msg} />}
        <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem} />
      </center>
    </>
  );
}

export default App;
