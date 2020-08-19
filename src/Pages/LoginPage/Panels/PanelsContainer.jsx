import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./Rightpanel";

const PanelsContainer = (props) => {
  console.log(props);
  return (
    <div className="panels-container">
      <LeftPanel props={props} />
      <RightPanel props={props} />
    </div>
  );
};

export default PanelsContainer;
