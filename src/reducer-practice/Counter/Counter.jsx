import React, { useReducer, useState } from "react";

const reducerFunction = (state, action) => {};

const Counter = () => {
  const [state, dispatch, a, b] = useReducer();
  const [count, setCount] = useState(0);

  console.log("state====>", state);
  console.log("dispatch===>", dispatch);
  console.log("a===>", a);
  console.log("b===>", b);
  return (
    <>
      <h1>Counter useReducer</h1>
      <h2>Counter : {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
