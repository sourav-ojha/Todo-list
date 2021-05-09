import React from "react";

export default function Task({ task, index, completed, removeTask }) {
  console.log(task);

  return (
    <div className={`task_list ${task.isCompleted ? "strike" : ""}`}>
      {task.text}
      <div className="btns">
        <button id="complete" onClick={() => completed(index)}>
          <img src={`${process.env.PUBLIC_URL}/img/approved.png`}  alt='complete'/>
        </button>
        <button id="remove" onClick={() => removeTask(index)}>
          <img src={`${process.env.PUBLIC_URL}/img/rejected.png`} alt='remove' />
        </button>
      </div>
    </div>
  );
}
