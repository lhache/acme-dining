import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }

    this._handleTextChange = this._handleTextChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleTextChange(event) {
    this.setState({text: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault()
    this.props.search(this.state.text)
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this._handleSubmit}>
          <input type="text" onChange={this._handleTextChange} />
          <button type="submit" ref="button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
