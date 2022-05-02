import React from "react";

const workSelectedContext = React.createContext({
  selectedWorks: [],
  addWork: (work) => {},
  removeWork: (work) => {},
});

export default workSelectedContext;