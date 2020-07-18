import React from 'react';

import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import HelloFunctionComponent from "./pages/helloFunctionComponent";
import HelloClassComponent from "./pages/helloClassComponent";
import StateComponent from "./components/exercises/stateComponent1";
import HandleEvents from "./pages/handleEvents";
import Exercise2 from "./components/exercises/exercise2";
import Exercises from "./components/exercises/exercises";
import Exercise1 from "./components/exercises/exercise1";
import GuestBook from "./pages/guestBook";
import HandleInputEvents from "./pages/handleInputEvents";
import ToDoApp from "./toDoApp/toDoApp";
import SetState from "./pages/setStateIsAsynchronous";
import LifeCycle from "./pages/lifecycle";
import CounterComponent from "./pages/stateExercises";
import SimpleForm from "./pages/simpleForm";
import StartExercise from "./pages/StartExercise";
import {ParentComponent} from "./pages/stateComponent/parentComponent";

function App() {
  return (
    <div className="app">
      <div className={'app_title'}>React - kompozycja komponentów</div>
      <BrowserRouter>
        <div className={'tabs'}>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/"><span role="img">🏠</span> Strona główna</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/hello-function-component">Hello function component</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/zadanie-wstepne">Zadanie wstępne</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/hello-class-component">Hello class component</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/set-state">Set state</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/handle-events">Zdarzenia</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/say-my-name">Say my name</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/lifecycle">Cykl życia komponentow</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to='/parentState'>Parent state</NavLink>

          <NavLink className={'tab'} activeClassName='tab--active' exact to="/exercises">Cwiczenia</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/guest-book">Statyczna lista gości</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to="/to-do">ToDo App</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to='/counter'>Counter APP</NavLink>
          <NavLink className={'tab'} activeClassName='tab--active' exact to='/simple-form'>Mały formularz</NavLink>

        </div>

        <div className="container">
          <Switch>
            <Route path="/hello-function-component" component={HelloFunctionComponent} />
            <Route path="/hello-class-component/exercise1" component={StateComponent} />
            <Route path="/hello-class-component" component={HelloClassComponent} />
            <Route path="/exercises" exact={true} component={Exercises} />
            <Route path="/exercises/1" exact={true} component={Exercise1} />
            <Route path="/exercises/2" exact={true} component={Exercise2} />
            <Route path="/handle-events" exact={true} component={HandleEvents} />
            <Route path="/parentState" exact={true} component={ParentComponent} />
            <Route path="/say-my-name" exact={true} component={HandleInputEvents} />
            <Route path="/guest-book" exact={true} component={GuestBook} />
            <Route path="/to-do" exact={true} component={ToDoApp} />
            <Route path="/set-state" exact={true} component={SetState} />
            <Route path="/lifecycle" exact={true} component={LifeCycle} />
            <Route path="/simple-form" exact={true} component={SimpleForm} />
            <Route path="/zadanie-wstepne" exact={true} component={StartExercise} />

            <Route path='/counter' exact={true} component={CounterComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
