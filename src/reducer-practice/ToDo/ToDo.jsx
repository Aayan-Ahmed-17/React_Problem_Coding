import React from "react";

const ToDo = () => {
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
        <span>task 1</span>
        <button>Remove</button>
      </div>
    </>
  );
};

export default ToDo;
