const checkUserReducer = (state = {
  resultCheck:"0"
},action) => {
  switch (action.type) {
    case "FETCH_CHECKUSER":
      state = {
        ...state,
        resultCheck : action.payload
      };
    case "FETCH_CHECKUSER_FULFILLED":
      state = {
        ...state,
        resultCheck : action.payload
      };
      break;

    default:
      break;
  }
  return state;
};
export default checkUserReducer;
