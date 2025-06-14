export const visibilityReducer = (state, action) => {
  switch (action.type) {
    case true:
      return { ...state, visibility: false };
    default:
      return { ...state, visibility: true };
  }
};

export const initialState = { visibility: true };