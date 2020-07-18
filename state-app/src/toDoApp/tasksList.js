import React from "react";

const TasksList = (props) => {
  return (
    <div>
      {
       props.tasks.map((task) => {
          if(props.tab === 'active' && !task.completed) {
            return <div onClick={() => props.onClickTask(task.id)}>{task.name}, {task.id}</div>
          }

          return null;
       })
      }
    </div>
  )
}

export {TasksList};
