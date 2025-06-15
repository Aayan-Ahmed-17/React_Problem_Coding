import React, { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.payload };
    case "RESET":
      return { ...state, [action.field]: action.payload };
  }
};
const Form = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const handleChange = (e) => {
    const { name, value } = e?.target;
    dispatch({ type: "SET_FIELD", field: name, payload: value });
  };

  const handleSubmit = (e) => {
    console.log("state==>", state);
    e.preventDefault();
    console.log("form submited ==>", state);
    dispatch({ type: "RESET", payload: initialState });
  };

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>first name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={state.firstName}
          />
        </div>
        <div>
          <label>last name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={state.lastName}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={state.email}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={state.password}
          />
        </div>
        <div>
          <label>confirmPassword</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={state.confirmPassword}
          />
        </div>
        <button type="submit"></button>
      </form>
    </>
  );
};

export default Form;
