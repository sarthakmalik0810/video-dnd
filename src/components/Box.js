import React from "react";

import { elementMap } from "../helper/constants";

function Box(props) {
  const drop = (e) => {
    e.preventDefault();
    const element = document.getElementById("element");
    const currentBoxId = e.target.id;
    element.classList.add(elementMap[currentBoxId]);
    element.style.display = "block";
    e.target.appendChild(element);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={props.id} className="box" onDragOver={dragOver} onDrop={drop}>
      {props.children}
    </div>
  );
}

export default Box;
