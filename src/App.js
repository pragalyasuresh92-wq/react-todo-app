import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const initialTasks = [
  {
    _id: 1,
    title: "Complete DBMS assignment",
    completed: true,
  },
  {
    _id: 2,
    title: "Study Java programming",
    completed: false,
  },
  {
    _id: 3,
    title: "Work on mini project",
    completed: false,
  },
  {
    _id: 4,
    title: "Review today's notes",
    completed: false,
  },
];

const App = () => {
  const [todoList, setTodoList] = useState(initialTasks);

  const [activeItem, setActiveItem] = useState({
    title: "",
    completed: false,
  });

  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setActiveItem((prevItem) => ({
      ...prevItem,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!activeItem.title.trim()) {
      return;
    }

    if (editItem) {
      setTodoList((prevList) =>
        prevList.map((item) =>
          item._id === activeItem._id ? activeItem : item
        )
      );

      setEditItem(false);
    } else {
      const newTask = {
        ...activeItem,
        _id: Date.now(),
      };

      setTodoList((prevList) => [...prevList, newTask]);
    }

    setActiveItem({
      title: "",
      completed: false,
    });
  };

  const handleEdit = (item) => {
    setActiveItem(item);
    setEditItem(true);
  };

  const handleDelete = (item) => {
    setTodoList((prevList) =>
      prevList.filter((task) => task._id !== item._id)
    );
  };

  const handleToggle = (item) => {
    setTodoList((prevList) =>
      prevList.map((task) =>
        task._id === item._id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completedTasks = todoList.filter(
    (task) => task.completed
  ).length;

  const totalTasks = todoList.length;

  return (
    <div className="mobile-app">

      {/* App content */}
      <main className="app-content">

        {/* Header */}
        <header className="app-header">
          <div>
            <p className="greeting">Good morning</p>
            <h1>My Tasks</h1>
          </div>

          <div className="profile-circle">
            P
          </div>
        </header>

        {/* Progress card */}
        <section className="progress-card">

          <div className="progress-text">
            <div>
              <p>Today's progress</p>
              <h2>
                {completedTasks}/{totalTasks}
              </h2>
            </div>

            <span className="progress-percent">
              {totalTasks === 0
                ? 0
                : Math.round(
                    (completedTasks / totalTasks) * 100
                  )}
              %
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width:
                  totalTasks === 0
                    ? "0%"
                    : `${(completedTasks / totalTasks) * 100}%`,
              }}
            />
          </div>

        </section>

        {/* Add task */}
        <section className="add-card">

          <div className="section-title">
            <h2>
              {editItem ? "Edit task" : "Add a task"}
            </h2>
          </div>

          <TodoInput
            activeItem={activeItem}
            editItem={editItem}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

        </section>

        {/* Task list */}
        <section className="tasks-section">

          <div className="tasks-heading">
            <h2>Today's tasks</h2>

            <span>
              {totalTasks} tasks
            </span>
          </div>

          <TodoList
            items={todoList}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />

        </section>

      </main>

      {/* Bottom navigation */}
      <nav className="bottom-nav">

        <div className="nav-item active">
          <span className="nav-icon">⌂</span>
          <span>Home</span>
        </div>

        <div className="nav-item">
          <span className="nav-icon">✓</span>
          <span>Tasks</span>
        </div>

        <div className="nav-item">
          <span className="nav-icon">+</span>
          <span>Add</span>
        </div>

        <div className="nav-item">
          <span className="nav-icon">○</span>
          <span>Profile</span>
        </div>

      </nav>

    </div>
  );
};

export default App;
