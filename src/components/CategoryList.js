import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import Category from './Category'
import ALL_CATEGORIES_QUERY from '../queries/allCategories'
import './CategoryList.css'


class CategoryList extends Component {
  render() {
    if (this.props.allCategories && this.props.allCategories.loading) {
      return <div>Loading</div>
    }

    if (this.props.allCategories && this.props.allCategories.error) {
       return <div>Error</div>
     }

    const allCategories = this.props.allCategories.allCategories || []

    return (
      <div className="CategoryList">
        {allCategories.map(cat => (
          <Category key={cat.id} category={cat}/>
        ))}
      </div>
    )
  }
}

export default graphql(ALL_CATEGORIES_QUERY, { name: 'allCategories' }) (CategoryList)
