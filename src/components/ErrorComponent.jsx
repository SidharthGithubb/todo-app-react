import { useContext } from "react";
import { TodoItemStore } from "../store/todo-items-store";

const ErrorComponent = () => {
  const { todoItems } = useContext(TodoItemStore);
  const msg = "No items to display";
  return todoItems.length === 0 && <div className="error-message">{msg}</div>;
};
export default ErrorComponent;
