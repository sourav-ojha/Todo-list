import React, { useState } from 'react'

export default function TodoForm({addTask}) {
    const [task, setTask] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if ( !task ) return;
        console.log(task, "handlesubmit")
        addTask(task);
        setTask('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
        type="text"
        name="task_input"
        value={task}
        id="task_input"
        onChange= {e => setTask(e.target.value)}
      />
        </form>
    )
}
