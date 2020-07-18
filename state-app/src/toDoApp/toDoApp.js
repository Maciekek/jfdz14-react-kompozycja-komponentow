import React from "react";
import PageContent from "../components/PageContent";
import {TasksList} from "./tasksList";

class ToDoApp extends React.Component{
  state = {
    tasks: [],
    tab: 'active',
  }

  onInputChange = (event) => {
    // console.log(event.keyCode);

    if (event.keyCode === 13) {
      this.addNewTask(event.target.value);
      event.target.value = '';
    }
  }

  addNewTask = (taskName) => {
    console.log(taskName);
    const newTask = {
      name: taskName,
      id: Math.floor(Math.random() * 1000),
      completed: false,
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  markElementAsFinished = (id) => {
    const updatedTasks = this.state.tasks
      .map((task) => {
        if(task.id === id) {
          return {
            name: task.name,
            id: task.id,
            completed: true
          }
        }

        return task;
      })

    this.setState({
      tasks: updatedTasks
    })

  }


  render() {
    return (
      <PageContent>
        <div>
          <input
            type="text"
            onKeyUp={this.onInputChange}/>

          <TasksList
            tasks={this.state.tasks}
            onClickTask={this.markElementAsFinished}
            tab={this.state.tab}
          />
        </div>
      </PageContent>
    )
  }
}


export default ToDoApp;
