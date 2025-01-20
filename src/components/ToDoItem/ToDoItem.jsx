import "./ToDoItem.css";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <li className="todo-text">{props.text}</li>
      <DeleteIcon
        className="delete-icon"
        onClick={() => {
          props.onChecked(props.id);
        }}
      />
    </div>
  );
}

export default ToDoItem;
