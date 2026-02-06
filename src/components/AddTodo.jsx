import { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddClick = () => {
    onNewItem(todoName, todoDueDate);
    setTodoName("");
    setTodoDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Add your todo here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDueDate}
            onChange={handleDueDateChange}
            required
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-button"
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
