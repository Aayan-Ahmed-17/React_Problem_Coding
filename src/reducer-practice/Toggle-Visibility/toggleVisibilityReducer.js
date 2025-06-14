export const visibilityReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, visibility: !state.visibility };
    default:
      return state;
  }
};

export const initialState = { visibility: true };
