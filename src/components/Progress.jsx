import React from "react";

const Progress = props => {

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="30"
        aria-valuemin="0"
        valuenow="30"
        aria-valuemax="100"
      />
    </div>
  );
};

export default Progress;
