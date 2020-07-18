import React from "react";

const ChildComponent = (props) => {
  return (
    <div>{props.user} | <span>REMOVE</span></div>
  )
}

export {ChildComponent};
