import React from "react";

function TaskList() {
import Task from "./Task";
function TaskList({tasks}) {
  const taskToDisplay =  tasks.map(task => (<Task key={task.text} text = {task.text} category = {task.category}/>))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskToDisplay}
    </div>
  );
}
export default TaskList;