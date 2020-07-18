import React from "react";

const ChildComponent = (props) => {
  const onClicked = () => {
    return props.onElementClicked(props.user);
  }

  return (
    <div>
      {props.user} |
      <span
        // onClick={() => props.onElementClicked(props.user)}
        onClick={onClicked}
      >
        REMOVE
      </span>
    </div>
  )
}

export {ChildComponent};
