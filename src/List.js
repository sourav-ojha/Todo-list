import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Task from "./Task";

export default function List() {
  const [tasks, setTasks] = useState([]);

  var today = new Date();
  var todatDate =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    "-" +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

  const addTask = (text) => {
    const newTask = [
      ...tasks,
      {
        text: text,
        Date: todatDate,
        isCompleted: false,
      },
    ];
    setTasks(newTask);
    console.log("addtaSK", newTask);
    console.log("Tasks", tasks);
  };

  const completed = (index) => {
    const newTask = [...tasks];
    newTask[index].isCompleted = true;
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <div className="list">
      <TodoForm addTask={addTask} />

      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          completed={completed}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}
