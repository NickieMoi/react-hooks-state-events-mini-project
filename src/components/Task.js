import React from "react";
import { useState } from "react";

function Task() {
function Task({category, text}) {
  const [classBlock, setBlock] = useState(true)
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    <div className={classBlock ? "task" : 'none'}>
      <div className="label">{category}</div>
      <div className="text">{classBlock ? text : null}</div>
      <button className="delete" onClick={() => setBlock(!classBlock)}>X</button>
    </div>
  );
}
export default Task;