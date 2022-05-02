import { createStore } from "redux";

const selectedWorkReducer = (state = { selectedWork: [] }, action) => {
  if (action.type === "ADD_WORK") {
    return {
      selectedWork: action.selectedWorkArr
    };
  }
  if (action.type === "REMOVE_WORK") {
    return {
      selectedWork: action.selectedWorkArr
    };
  }
  return state;
};

const store = createStore(selectedWorkReducer);
export default store;
