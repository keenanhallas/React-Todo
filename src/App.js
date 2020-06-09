import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  addTask = (event, task) => {
    event.preventDefault();
    this.setState({
        tasks:[
            ...this.state.tasks,
            {
                name: task,
                id: Date.now(),
                completed: false
            }
        ]
    })
    console.log(this.state);
}

  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
