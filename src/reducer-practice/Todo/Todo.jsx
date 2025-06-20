import React, { useReducer } from "react";
import TodoList from "./TodoList.jsx";

const Todo = () => {
  const [state, dispatch] = useReducer([{ id: 0, text: "through payload" }]);
  return (
    <>
      <h2>todo</h2>
      <div>
        <input type="text" onChange={() => {}} />
        <button>Add</button>
      </div>

      {/* {task.map((e) => (
          <TodoList />
        ))} */}
    </>
  );
};

export default Todo;
