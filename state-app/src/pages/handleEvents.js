import React from "react";
import PageContent from "../components/PageContent";

class HandleEvents extends React.Component {

  onClickHandler = () => {
    alert('hello!');
  };

  render() {
    return (
      <PageContent>
        <div>
          Hejo!
          <p>Witaj w następnej sekcji. Tutaj nauczymy się jak reagowac na zdarzenia takie jak klikniecie przycisku.</p>
          <p>Kliknij poniższy przycisk i zobacz czy coś sie stanie 🔥</p>


          <p>
            <div onMouseEnter={this.onClickHandler}>Kliknij mnie 😎</div>

            <button onClick={this.onClickHandler}>Kliknij mnie 😎</button>
          </p>

        </div>
      </PageContent>
    );
  }
}

export default HandleEvents;
