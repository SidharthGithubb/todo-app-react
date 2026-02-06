import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteItem }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={Math.random()}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteItem={onDeleteItem}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
