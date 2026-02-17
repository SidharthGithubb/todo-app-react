import { useContext } from "react";
import { TodoItemStore } from "../store/todo-items-store";

const ErrorComponent = ({ message }) => {
  const { todoItems } = useContext(TodoItemStore);
  return (
    todoItems.length === 0 && <div className="error-message">{message}</div>
  );
};
export default ErrorComponent;
