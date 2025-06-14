import React, { useReducer } from "react";
import { visibilityReducer, initialState } from "./toggleVisibilityReducer";
const ToggleVisibility = () => {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);
  return (
    <>
      <h2>Toggle Visibility</h2>
      <span>{state.visibility && "Text to hide/show"}</span>
      <button onClick={() => dispatch({ type: state.visibility })}>
        {state.visibility ? "hide" : "show"}
      </button>
    </>
  );
};

export default ToggleVisibility;
