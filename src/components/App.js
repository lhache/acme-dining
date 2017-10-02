import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import ProductList from './ProdutList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ProductList}/>
        </Switch>
      </div>
    );
  }
}

export default App;
