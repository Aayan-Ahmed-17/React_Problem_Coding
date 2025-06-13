import React, { useReducer } from "react";

const reducerFunction = (state, action) => {};

const Counter = () => {
  const [state, dispatch] = useReducer();
  return (
    <>
      <h1>Counter useReducer</h1>
      <h2>Counter : {state}</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </>
  );
};

export default Counter;
