import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
import { useState } from "react";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tassk, setTasks] = useState(TASKS)
  let [myFilter, setFilter] = useState('All')
  console.log(tassk)
  function handleFilter(cat){
    setFilter(cat)
  }
  let filterdTask = tassk.filter(task => {
    if(myFilter === 'All'){
      return true
    } else {
      return task.category === myFilter;
    }
  })
  function onTaskFormSubmit(task){
    setTasks([...tassk, task])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
      <CategoryFilter onFilter = {handleFilter} categories = {CATEGORIES}/>
      <NewTaskForm categ = {CATEGORIES} onTaskFormSubmit = {onTaskFormSubmit} tassk = {tassk}/>
      <TaskList tasks = {filterdTask}/>
    </div>
  );
}
export default App;