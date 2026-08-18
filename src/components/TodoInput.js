import React from "react";

const TodoInput = ({
  activeItem,
  editItem,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name="title"
        className="todo-input"
        placeholder="What do you need to do?"
        value={activeItem.title}
        onChange={handleChange}
      />

      <div className="input-bottom">

        <label className="complete-option">

          <input
            type="checkbox"
            name="completed"
            checked={activeItem.completed}
            onChange={handleChange}
          />

          <span>Completed</span>

        </label>

        <button
          type="submit"
          className="add-button"
        >
          {editItem ? "Update" : "Add task"}
        </button>

      </div>

    </form>
  );
};

export default TodoInput;
