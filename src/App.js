import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import axios from "axios";

export default class App extends Component {
  state = {
    todoList: [],
    activeItem: {
      title: "",
      completed: false,
    },
    editItem: false,
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/todo/api/v1/todos/")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  handleSubmit = (item) => {
    this.setState({
      editItem: false,
    });
    
    if (item.id) {
      axios
        .put(`/todo/api/v1/todos/${item.id}/`, item)
        .then((res) => this.refreshList())
        .catch((err) => console.log(err));
      return;
    }
    axios
      .post("/todo/api/v1/todos/", item)
      .then((res) => this.refreshList())
      .catch((err) => console.log(err));
  };

  handleEdit = (item) => {
    this.setState({ activeItem: item, editItem: true });
  };

  handleDelete = (item) => {
    axios
      .delete(`/todo/api/v1/todos/${item.id}/`)
      .then((res) => this.refreshList())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-uppercase text-center my-2">Todo App</h1>
        <div className="row">
          <div className="col-8 col-md-6 mx-auto">
            <TodoInput
              activeItem={this.state.activeItem}
              editItem={this.state.editItem}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList
              items={this.state.todoList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}