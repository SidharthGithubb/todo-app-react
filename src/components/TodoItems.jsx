import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemStore } from "../store/todo-items-store";

const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemStore);
  return (
    <div className="items-container">
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={Math.random()}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
