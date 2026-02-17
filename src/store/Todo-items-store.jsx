import { createContext } from "react";

export const TodoItemStore = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
