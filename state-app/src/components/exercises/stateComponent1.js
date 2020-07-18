import React from "react";
import PageContent from "../PageContent";

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageContent>
        <div>
          <p>Cześć Przyjacielu! 👀 </p>
          <p>Przed tobą ważne zadanie! W tym miejscu zapoznasz się moim stanem (state)</p>
        </div>
      </PageContent>
    );
  }
}


export default StateComponent
