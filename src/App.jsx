import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/todoItems";
import ErrorComponent from "./components/ErrorComponent";
import { useState, useReducer } from "react";
import { TodoItemStore } from "./store/todo-items-store";

function todoItemStateChange(currentTodoItems, action) {
  let newTodoItems = [];
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];

    return newTodoItems;
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter((item) => {
      return item.name !== action.payload.itemName;
    });

    return newTodoItems;
  } else {
    return [];
  }
}

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemStateChange, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItem = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDueDate: itemDueDate,
      },
    };

    dispatchTodoItems(newItem);
  };

  const deleteItem = (itemName) => {
    const newItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemName,
      },
    };

    dispatchTodoItems(newItem);
  };

  return (
    <>
      <TodoItemStore.Provider
        value={{
          todoItems: todoItems,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        }}
      >
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <ErrorComponent />
          <TodoItems />
        </center>
      </TodoItemStore.Provider>
    </>
  );
}

export default App;
