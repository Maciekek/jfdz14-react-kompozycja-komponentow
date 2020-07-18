import React from "react";
import PageContent from "../PageContent";
import {NavLink} from "react-router-dom";

class Exercises extends React.Component {
  render() {
    return (
      <PageContent>
        <div>
          <ul>
            <li>
              <NavLink className={'tab'} activeClassName='tab--active' exact to="/exercises/1">Cwiczenie 1 </NavLink>
            </li>
            <li>
              <NavLink className={'tab'} activeClassName='tab--active' exact to="/exercises/2">Cwiczenie 2 </NavLink>
            </li>
          </ul>
        </div>
      </PageContent>
    )
  }
}

export default Exercises;
