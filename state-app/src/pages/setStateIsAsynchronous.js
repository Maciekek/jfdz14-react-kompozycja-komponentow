import React from 'react';
import PageContent from "../components/PageContent";
import {NavLink} from "react-router-dom";

class SetState extends React.Component {

  state = {
    hello: "Jakiś pierwotny stan"
  };


  onButtonClicked = () => {
    console.log(13, 'Old State: ', this.state.hello);

    this.setState({
      hello: "Jakis nowy stan"
    });

    console.log(19, "New state? ", this.state.hello);
  };

  render() {
    return (
      <PageContent>
        <div>
          <p>Sprawdzmy jak działa setState...  😱</p>

          <p>Przejdz do kodu, aby zobaczyc co tu we mnie gra  👀</p>

          <button onClick={this.onButtonClicked}>Kliknij mnie!</button>

        </div>
      </PageContent>
    )
  }
}

export default SetState;
