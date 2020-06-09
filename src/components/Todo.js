import React from "react";

const Todo = ({task, markComplete}) => {
    return (
        <div className="todo" style={task.completed ? {border: "1px solid black", margin: "2%", padding: "2%", textDecoration: "line-through"} : {border: "1px solid black", margin: "2%", padding: "2%"}}>
            <h2>{task.name}</h2>
            <button onClick={event => {markComplete(event, task.id)}}>{task.completed ? "Mark incomplete" : "Mark complete"}</button>
        </div>
    );
}

export default Todo;