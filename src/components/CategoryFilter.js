import React from "react";

function CategoryFilter() {
import Button from "./Button";
function CategoryFilter({categories, onFilter}) {
  const CatBtn = categories.map(cat => (<Button key={cat} onFilter = {onFilter} cat = {cat}/>))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {CatBtn}
    </div>
  );
}
export default CategoryFilter;