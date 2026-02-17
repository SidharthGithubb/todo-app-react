import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/todoItems";
import ErrorComponent from "./components/ErrorComponent";
import { useState } from "react";
import { TodoItemStore } from "./store/todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const msg = "No items to display";

  const handleNewItem = (itemName, itemDueDate) => {
    const newItem = {
      name: itemName,
      dueDate: itemDueDate,
    };
    if (newItem.name === "" || newItem.dueDate === "") {
      setTodoItems([]);
      return;
    }

    setTodoItems((todoItems) => [...todoItems, newItem]);
  };

  const handleDeleteItem = (itemName) => {
    const updatedItems = todoItems.filter((item) => {
      return item.name !== itemName;
    });
    setTodoItems(updatedItems);
  };

  return (
    <>
      <TodoItemStore.Provider
        value={{
          todoItems: todoItems,
          addNewItem: handleNewItem,
          deleteItem: handleDeleteItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <ErrorComponent message={msg} />
          <TodoItems />
        </center>
      </TodoItemStore.Provider>
    </>
  );
}

export default App;
