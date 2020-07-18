import React from 'react';
import PageContent from "../components/PageContent";
import {NavLink} from "react-router-dom";

class GuestBook extends React.Component {

  state = {
    guests: ['Marcin', 'Monika', 'Marian', 'Iwona']
  };

  render() {
    return (
      <PageContent>
        <div>
          <p>Witaj w <i>statycznej księdze gości</i>! </p>
          <p>Wykorzystaj poniższy komponent <i>Guest</i>, aby wyświetlić imiona wszystkich gości  🥳 </p>
        </div>
      </PageContent>
    )
  }
}

const Guest = ({name}) => {
  return <div>Imie: {name}</div>
};

export default GuestBook;
