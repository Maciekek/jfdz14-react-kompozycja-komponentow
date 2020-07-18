import React from 'react';
import PageContent from "../components/PageContent";
import {NavLink} from "react-router-dom";

class HelloClassComponent extends React.Component {

  state = {
    hello: "Cześć, jestem inicjalnym statem tego komponentu. Zawsze na początku będę miał taki sam stan! " +
      "Pamietaj, że stan możesz zainicjalizować w taki sposób jak teraz, lub z użyciem contructora",
    name: "1",
  };

  render() {
    return (
      <PageContent>
        <div>
          <p>Cześć, Jestem komponentem klasowym. To znaczy, że zostałem stworzony z użyciem klasy, która dziedziczy po <span>React.Component</span> </p>

          <p>Ale dlaczego inni mówią, że jestem "smart"?  🤔</p>

          <ul>
            <li> 🤔 Mam możliwość zadeklarowania swojej pamięci, do której będę miał dostęp. Będę mógł zapisać tam wartości zmiennych jak i odczytać z tej pamięci dane</li>
            <li> 🤔 Mam też dostęp do metod cykly mojego życia, jednak o tym opowiem ci później 🥰 </li>
          </ul>


          <br/>
          <p>
            Zawartość mojego <i>state.hello</i>: <strong>{this.state.hello}</strong>
          </p>
          <br/>

          <div>
            <p>Przejdź teraz na tę stronę:
              <NavLink activeClassName='tab--active' to="/hello-class-component/exercise1"> TUTAJ </NavLink>
              , aby spróbować mnie oprogramować</p>
          </div>

        </div>
      </PageContent>
    )
  }
}

export default HelloClassComponent;
