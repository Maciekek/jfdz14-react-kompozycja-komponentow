import React from "react";

const ActionButton = ({sign, onClicked}) => {
  return (
    <button onClick={onClicked}>{sign}</button>
  )
};

export default ActionButton;
