import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemStore } from "../store/todo-items-store";

const TodoItem = (props) => {
  let todoName = props.todoName;
  let todoDate = props.todoDate;
  const { deleteItem } = useContext(TodoItemStore);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
