// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = ({tasks, markComplete}) => {
    return (
        <div className="todoList">
            {tasks.map((task, i) => {
                return <Todo key={i} task={task} markComplete={markComplete}/>
            })}
        </div>
    );
}

export default TodoList;