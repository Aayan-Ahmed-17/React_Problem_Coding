import React, { useReducer } from "react";
import { counterInitialState, counterReducer } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);
  return (
    <>
      <h2>Counter : {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset </button>
    </>
  );
};

export default Counter;
