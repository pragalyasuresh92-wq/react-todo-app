import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ items, handleEdit, handleDelete }) => {
  return (
    <ul className="list-group my-2">
      {items.map((item) => (
        <TodoItem
          key={item._id}
          item={item}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
