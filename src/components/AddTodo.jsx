import { useRef } from "react";
import { BiAddToQueue } from "react-icons/bi";
const AddTodo = ({ onNewItem }) => {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form action="" onSubmit={handleAddClick}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Add your todo here"
              required
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} required />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">
              <BiAddToQueue />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddTodo;
