import React from "react";
import PageContent from "../PageContent";

class Exercise2 extends React.Component {

  render() {
    return (
      <PageContent>
        <div>
          Zadanie numer 2.
          <p>Do tego komponentu dopisz funkconalność, która będzie zliczała ilość przyciśnieć w poniższy przycisk</p>
        </div>

        <div>Kliklnięto w przycisk: 0 razy</div>


        <button>Kliknij mnie!</button>
      </PageContent>
    )
  }
}

export default Exercise2;
