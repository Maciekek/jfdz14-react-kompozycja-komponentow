import React from "react";
import PageContent from "../components/PageContent";

class SimpleForm extends React.Component {
  state = {
    name: '',
    isAdult: false,
    description: ''
  };

  onInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  };

  onIsAdultChange = (e) => {
    this.setState({
      isAdult: e.target.checked
    })
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  };

  showSummary = () => {
    alert(`Twoje imie to ${this.state.name}. Jesteś pełnoletni: ${this.state.isAdult}?. I powiedziałeś sobie: ${this.state.description}`)
  };

  render() {
    return (
      <PageContent>
        <div>
          <p>Witaj w prostym formularzu :)</p>
          <p>Poniżej jest kilka inputów, jak przycisniesz przycisk zapisz, pokaże się modal z podanymi wartościami :) </p>
        </div>


        <div>
          <label htmlFor="name">Imię: </label>
          <input
            name='name'
            id='name'
            type="text"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>

        <div>
          <label htmlFor="isAdult">Czy jesteś pełnoletni? (zaznacz jeśli tak)</label>
          <input
            name='isAdult'
            id='isAdult'
            type="checkbox"
            value={this.state.isAdult}
            onChange={this.onIsAdultChange}
          />
        </div>

        <div>
          <label htmlFor="description">Powiedz sobie kilka miłych słów</label>
          <textarea
            name='description'
            id="description"
            cols="30"
            rows="10"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
        </div>


        <button onClick={this.showSummary}>Pokaż podsumowanie</button>

        <br/>
      </PageContent>
    )
  }
}

export default SimpleForm;
