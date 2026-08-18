import React from "react";

const TodoItem = ({
  item,
  handleEdit,
  handleDelete,
  handleToggle,
}) => {

  return (
    <div
      className={`task-item ${
        item.completed ? "completed" : ""
      }`}
    >

      <div className="task-left">

        <button
          className={`check-button ${
            item.completed ? "checked" : ""
          }`}
          onClick={() => handleToggle(item)}
        >
          {item.completed ? "✓" : ""}
        </button>

        <div className="task-info">

          <span className="task-title">
            {item.title}
          </span>

          <span className="task-status">
            {item.completed
              ? "Completed"
              : "In progress"}
          </span>

        </div>

      </div>

      <div className="task-actions">

        <button
          className="edit-button"
          onClick={() => handleEdit(item)}
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={() => handleDelete(item)}
        >
          ×
        </button>

      </div>

    </div>
  );
};

export default TodoItem;
