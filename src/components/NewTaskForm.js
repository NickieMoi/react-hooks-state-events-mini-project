import React from "react";
import React, {useState} from "react";

function NewTaskForm() {
function NewTaskForm({categ, onTaskFormSubmit, tassk}) {
  const [inputTxt, setInputTxt] = useState('')
  const [inputOpt, setInputOpt] = useState('code')

  // const catToShow = categ.filter(cat =>  cat !== "All")
  // console.log(inputOpt)
  let task = {text : inputTxt, category : inputOpt}
  console.log(task)
}
}
  return (
    <form className="new-task-form">
    <form className="new-task-form" onSubmit={(e) => {e.preventDefault(); onTaskFormSubmit(task)} }>
      <label>
        Details
        <input type="text" name="text" />
        <input type="text" value={inputTxt} onChange={(e) => setInputTxt(e.target.value)} name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        <select name="category" value={inputOpt} onChange ={(e) => setInputOpt(e.target.value)}>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;