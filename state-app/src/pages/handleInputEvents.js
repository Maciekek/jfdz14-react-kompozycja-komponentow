import React from "react";
import PageContent from "../components/PageContent";

class HandleInputEvents extends React.Component {
  state = {
    yourName: "",
    checked: false
  };

  keyUpHandler = (event) => {
    console.log(event.target.value);

    this.setState({
      yourName: event.target.value
    })
  }

  render() {
    return (
      <PageContent>
        <div>
         <p>Spraw, aby komponent się z Tobą przywitał:) zajrzyj w kod...</p>

          <input type="text" onChange={this.keyUpHandler} placeholder={"Podaj swoje imie..."}/>

          <p>
            {this.state.yourName.length > 0
              ? `Witaj podróżniku o imieniu ${this.state.yourName}`
              : null}
          </p>

        </div>
      </PageContent>
    );
  }
}

export default HandleInputEvents;
