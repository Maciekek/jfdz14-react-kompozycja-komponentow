import React from "react";
import PageContent from "../PageContent";

class Exercise1 extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    }

    setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 500);
  }

  render() {
    return (
      <PageContent>
        <div>
          Zadanie numer 1.
          <p>Dopisz do tego komponentu funkcjonalnosc,
            ktora pozwoli pokazac aktualna godzine w takim formacie:
          HH:mm:ss. Uwaga, niech z kazda sekunda godzina sie
            aktualizuje :) </p>
        </div>

        {this.state.time.toLocaleTimeString()}

      </PageContent>
    )
  }
}

export default Exercise1;
