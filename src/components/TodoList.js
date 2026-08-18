import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  items,
  handleEdit,
  handleDelete,
  handleToggle,
}) => {
  return (
    <div className="task-list">

      {items.length === 0 ? (
        <div className="empty-state">
          <p>No tasks yet</p>
          <span>Add your first task above.</span>
        </div>
      ) : (
        items.map((item) => (
          <TodoItem
            key={item._id}
            item={item}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))
      )}

    </div>
  );
};

export default TodoList;
