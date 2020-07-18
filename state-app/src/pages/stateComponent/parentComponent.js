import React from 'react';
import {ChildComponent} from "./childComponent";
import PageContent from "../../components/PageContent";

class ParentComponent extends React.Component {
  state = {
    guests: ['Monika', 'Paweł', 'Jan']
  }

  onClickedOnChildElement = (childName) => {
    console.log("CHILD ELEMENT CLICKED", childName);

    const newGuests = this.state.guests
      .filter((name) => {
        return name !== childName
      });

    this.setState({
      guests: newGuests
    })


  }

  render() {
    return (
      <PageContent>
        {
          this.state.guests.map(user => {
            return (
              <ChildComponent
                user={user}
                onElementClicked={this.onClickedOnChildElement}
              />
            )
        })
        }
      </PageContent>

    )
  }
}

export {ParentComponent};









