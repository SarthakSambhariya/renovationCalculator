import workSelectedContext from "./workSelected-context";
import { useReducer } from "react";

const defaultWorkSelectedState = {
  selectedWorks: [],
};

const workSelectedReducer = (state, action) => {
  if ((action.type = "ADD_WORK")) {
    if (!state.selectedWorks.includes(action.work)) {
      const updatedSelectedWorks = state.selectedWorks.concat(action.work);
      return {
        selectedWorks: updatedSelectedWorks,
      };
    }
  }
  if ((action.type = "REMOVE_WORK")) {
    let index = state.selectedWorks.indexOf(action.work);
    console.log(`index: ${index}`);
    if (index === -1) {
      return;
    }

    console.log(`state.selectedWorks BEFORE: ${state.selectedWorks}`);
    state.selectedWorks.splice(index, 1);

    return {
      selectedWorks: state.selectedWorks,
    };
  }
  return defaultWorkSelectedState;
};

const WorkSelectedProvider = (props) => {
  const [selectedWorksState, dispatchWorkSelectionAction] = useReducer(
    workSelectedReducer,
    defaultWorkSelectedState
  );

  const addWorkToSelectedWorks = (work) => {
    dispatchWorkSelectionAction({ type: "ADD_WORK", work: work });
  };
  const removeWorkFromSelectedWorks = (work) => {
    dispatchWorkSelectionAction({ type: "REMOVE_WORK", work: work });
  };

  const workContext = {
    selectedWorks: selectedWorksState.selectedWorks,
    addWork: addWorkToSelectedWorks,

    removeWork: removeWorkFromSelectedWorks,
  };
  return (
    <workSelectedContext.Provider value={workContext}>
      {props.children}
    </workSelectedContext.Provider>
  );
};
export default WorkSelectedProvider;
