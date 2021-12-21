// No Side Effects
export const userReducer = (state, action) => {
  let newState = [...state];
  switch (action.type) {
    case "INITIAL_DATA":
      return [...action.data];
    case "ADD-FRIEND":
      return [...state, action.user];
    case "REMOVE-FRIEND":
      newState = state.filter((item) => item.id !== action.user.id);
      return newState;
    case "UPDATE-FRIEND":
      newState = state.map((item) => {
        if (item.id === action.user.id) {
          return action.user;
        } else {
          return item;
        }
      });
      return newState;
    default:
      return state;
  }
};
