import React from "react";

const TodoItem = ({ item, handleEdit, handleDelete }) => {
  return (
    <li
      key={item._id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span className="mr-2">
        {item.completed ? <s>{item.title}</s> : item.title}
      </span>
      <span>
        <button
          className="btn btn-secondary mr-2"
          onClick={() => handleEdit(item)}
        >
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(item)}>
          Delete
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
