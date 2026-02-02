import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/todoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "2024-06-30",
    },
    {
      name: "Buy Milk",
      dueDate: "2024-06-30",
    },
    {
      name: "Buy Milk",
      dueDate: "2024-06-30",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
