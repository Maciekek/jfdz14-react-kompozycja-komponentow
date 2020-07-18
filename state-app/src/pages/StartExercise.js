import React from 'react';
import PageContent from "../components/PageContent";


const StartExercise = () => {
  let counter = 0;

  return (
    <PageContent>
      <div>
        <p>
          Cześć 👻!  Jestem komponentem Funkcyjnym! Aby przejść do następnego etapu musisz
          wykonać jedno zadanie!
        </p>

        <p>
          Poniżej masz jeden przycisk i obok licznik ilości przyciśnięć tego przycisku.
        </p>

        <ul>
          <button onClick={() => {
            console.log('test')
            console.log(counter)
            counter += 1;
          }}>Increment!</button>


          <p>Counter: {counter}</p>
        </ul>
      </div>
    </PageContent>
  )
};

export default StartExercise;
