// No Side Effects
export const userReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...action.data];
    case "ADD-FRIEND":
      return [...state, action.user];
    case "REMOVE-FRIEND":
      const newState = state.filter((item) => item.id !== action.user.id);
      return newState;
    case "UPDATE-FRIEND":
      return [...state]; //need to change
    default:
      return state;
  }
};
