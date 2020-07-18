import React from "react";
import PageContent from "../PageContent";

class StateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      version: '1'
    }

    setInterval(() => {
      console.log("setState")

      this.setState({
        version: Math.random()
      })
    }, 1000)
  }


  render() {
    console.log('render');
    return (
      <PageContent>
        <div>
          <p>Cześć Przyjacielu! 👀 </p>
          <p>Przed tobą ważne zadanie!
            W tym miejscu zapoznasz się moim stanem (state)
          </p>

          <div>{this.state.version}</div>

        </div>
      </PageContent>
    );
  }
}


export default StateComponent
