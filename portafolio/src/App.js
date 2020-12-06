import React, { Component } from 'react';
import { Route } from 'react-router';
import Profile from './Profile/index'
import Alex from './Profile/Alex/index'
import { Usuarios } from './components/Usuarios';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Comentarios } from './components/Comentarios';
import { Comentar } from './components/Comentar';
import { TablasEjemplo } from './components/TablasEjemplo';
import { EquisCero } from './components/EquisCero';
import { Parejas } from './components/Parejas';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Route exact path='/' component={Profile} />
        <Route exact path='/alexdiaz' component={Alex} />
        <Route path='/alexdiaz/contador' component={Counter} />
        <Route path='/alexdiaz/usuarios' component={Usuarios} />
        <Route path='/alexdiaz/fetch-data' component={FetchData} />
        <Route path='/alexdiaz/comentarios' component={Comentarios} />
        <Route path='/alexdiaz/comentar' component={Comentar} />
        <Route path='/alexdiaz/TablasEjemplo' component={TablasEjemplo} />
        <Route path='/alexdiaz/EquisCero' component={EquisCero} />
        <Route path='/alexdiaz/Parejas' component={Parejas} />
      </div>
    );
  }
}
