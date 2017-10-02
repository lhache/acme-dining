import React, { Component } from 'react';
import CategoryList from './CategoryList'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <CategoryList />
      </header>
    );
  }
}

export default Header;
