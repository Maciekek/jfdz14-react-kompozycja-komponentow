import React from 'react';
import PageContent from "../components/PageContent";
import {NavLink} from "react-router-dom";

class LifeCycle extends React.Component {

  constructor(props) {
    super(props);

    console.log("CONSTRUCTOR");

    this.state = {
      hello: "Jakiś pierwotny stan"
    }
  }

  componentDidMount() {
    console.log("MOUNTED")
  }

  shouldComponentUpdate() {
    console.log('SHOULD COMPONENT UPDATE')

    return true;
  }

  onButtonClicked = () => {
    console.log("CLICKED");

    this.setState({
      hello: "Jakis nowy stan"
    });
  };

  render() {
    return (
      <PageContent>
        <div>
          <p>A teraz pobawimy się cyklem mojego życia</p>

          <p>Sprawdz jak zadziała metoda constructor</p>
          <p>Sprawdz jak zadziała metoda componentDidMount</p>
          <p>Sprawdz jak zadziała metoda componentWillUnmount</p>

          {this.state.hello}
          <br/>
          <button onClick={this.onButtonClicked}>click me</button>
        </div>
      </PageContent>
    )
  }
}

export default LifeCycle;
