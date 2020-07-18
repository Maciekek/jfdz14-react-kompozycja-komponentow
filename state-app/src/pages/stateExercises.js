import React from "react";
import PageContent from "../components/PageContent";
import CounterResult from "./counterResult";
import ActionButton from "./actionButton";

class CounterComponent extends React.Component {
  state = {
    counterValue: 0
  };

  increase = () => {
    this.setState({
      counterValue: this.state.counterValue + 1
    })
  };

  decrease = () => {
    this.setState({
      counterValue: this.state.counterValue - 1
    })
  };

  componentDidMount() {
    console.log("RODZIC ZOSTAL ZALADOWANY")
  }

  render() {
    return (
      <PageContent>
        <CounterResult value={this.state.counterValue}/>
        <ActionButton sign={"+"} onClicked={this.increase}/>
        <ActionButton sign={"-"} onClicked={this.decrease}/>
      </PageContent>
    )
  }
}

export default CounterComponent;
