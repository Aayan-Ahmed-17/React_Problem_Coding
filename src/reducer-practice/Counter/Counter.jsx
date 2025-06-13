import React, { useReducer } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return (state = 0);
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducerFunction, 0);
  return (
    <>
      <h1>Counter useReducer</h1>
      <h2>Counter : {state}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset </button>
    </>
  );
};

export default Counter;
