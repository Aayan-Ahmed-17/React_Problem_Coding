export const counterReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.incrementBy };
    case "DECREMENT":
      if (!(state.count - 3 <= 0))
        return { ...state, count: state.count - state.decrementBy };

    default:
      return { ...state, count: 0 };
  }
};

export const counterInitialState = {
  count: 0,
  incrementBy: 5,
  decrementBy: 3,
};
