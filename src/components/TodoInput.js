import React from "react";

const TodoInput = ({ activeItem, editItem, handleChange, handleSubmit }) => {
  return (
    <div className="card card-body">
      <form action="">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control text-capitalize"
            placeholder="add todo item"
            value={activeItem.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            name="completed"
            className="form-check-input"
            checked={activeItem.completed}
            onChange={handleChange}
          />
          <label className="form-check-label">Completed</label>
        </div>
        <button
          type="submit"
          className={
            editItem ? "btn btn-success mt-3" : "btn btn-primary mt-3"
          }
          onClick={() => handleSubmit(activeItem)}
        >
          {editItem ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
