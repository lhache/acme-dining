import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

class Category extends Component {
  render() {
    const { name } = this.props.category
    return (
      <div className="Category">
        <Link to={`/?category=${name}`} className='CategoryLink'>{name}</Link>
      </div>
    );
  }
}

export default Category
