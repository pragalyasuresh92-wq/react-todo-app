import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import axios from "axios";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [activeItem, setActiveItem] = useState({
    title: "",
    completed: false,
  });
  const [editItem, setEditItem] = useState(false);

  const refreshList = () => {
    axios
      .get("/todo/api/v1/todos/")
      .then((res) => setTodoList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshList();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setActiveItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (item) => {
    setEditItem(false);
    
    if (item.id) {
      axios
        .put(`/todo/api/v1/todos/${item.id}/`, item)
        .then((res) => refreshList())
        .catch((err) => console.log(err));
      return;
    }
    axios
      .post("/todo/api/v1/todos/", item)
      .then((res) => refreshList())
      .catch((err) => console.log(err));
  };

  const handleEdit = (item) => {
    setActiveItem(item);
    setEditItem(true);
  };

  const handleDelete = (item) => {
    axios
      .delete(`/todo/api/v1/todos/${item.id}/`)
      .then((res) => refreshList())
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1 className="text-uppercase text-center my-2">Todo App</h1>
      <div className="row">
        <div className="col-8 col-md-6 mx-auto">
          <TodoInput
            activeItem={activeItem}
            editItem={editItem}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <TodoList
            items={todoList}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;