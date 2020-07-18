import React from 'react';
import PageContent from "../components/PageContent";


const HelloFunctionComponent = () => {
  return (
    <PageContent>
      <div>
        <p>
          Cześć 👻!  Jestem komponentem Funkcyjnym! To znaczy, że zostałem stworzony przez funkcje
        </p>

        <p>To oznacza, że nie mam swojej <strong>pamięci (state)</strong>. Jednak mogę zrobić kilka innych rzeczy</p>

        <ul>
          <li> 👍 Wyświetlić to co dostałem od rodzica <strong>(props)</strong></li>
          <li> 🤔 Powiadomić rodzica o zdarzeniu <strong>(props)</strong></li>
        </ul>

      </div>
    </PageContent>
  )
};

export default HelloFunctionComponent;
