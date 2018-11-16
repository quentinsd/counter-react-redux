const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD1":
      return state + 1;
    case "ADD10":
      return state + 10;
    case "LESS1":
      return state - 1;
    case "LESS10":
      return state - 10;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
