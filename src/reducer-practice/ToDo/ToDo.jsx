import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState([{ id: 0, text: "through payload" }]);
  return (
    <>
      <h2>ToDo</h2>
      <div>
        {/* adding */}
        <input type="text" />
        <button>Add</button>
      </div>
      <br />
      <br />
      <div>
        {/* deleting */}
        {task.map((e) => (
          <div>
            <span>task 1</span>
            <button>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDo;
