import React, { useState } from "react";

const TodoForm = ({addTask, clearCompleted}) => {
    const [formState, setFormState] = useState("");

    const handleChange = event => {
        setFormState(event.target.value);
    }

    return (
        <div>
            <form onSubmit={event => {
                addTask(event, formState);
            }}>
                <label htmlFor="newTask">New task: </label>
                <input
                    id="newTask"
                    name="newTask"
                    value={formState}
                    onChange={handleChange}
                />
                <button type="submit">Add task</button>
                <button onClick={event => {clearCompleted(event)}}>Clear completed tasks</button>
            </form>
        </div>
    );
}

export default TodoForm;