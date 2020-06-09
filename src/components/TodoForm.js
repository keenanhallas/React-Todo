import React, { useState } from "react";

const TodoForm = ({addTask}) => {
    const [formState, setFormState] = useState("");

    const handleChange = event => {
        setFormState(event.target.value);
    }

    return (
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
            <button>Submit</button>
            <button>Clear completed</button>
        </form>
    );
}

export default TodoForm;