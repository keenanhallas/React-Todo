import React from "react";

const Todo = ({task}) => {
    return (
        <div className="todo" style={{border: "1px solid black", margin: "2%", padding: "2%"}}>
            <h2>{task.name}</h2>
            <button>Mark complete</button>
        </div>
    );
}

export default Todo;