import React from 'react';
import {ChildComponent} from "./childComponent";
import PageContent from "../../components/PageContent";

class ParentComponent extends React.Component {
  state = {
    guests: ['Monika', 'Paweł', 'Jan']
  }


  render() {
    return (
      <PageContent>
        {
          this.state.guests.map(user => {
          return <ChildComponent user={user}/>
        })
        }
      </PageContent>

    )
  }
}

export {ParentComponent};

