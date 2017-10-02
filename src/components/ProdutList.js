import React, { Component } from 'react'
import { graphql, withApollo } from 'react-apollo'
import { withRouter } from 'react-router'
import Product from './Product'
import getQueryParams from '../utils/getQueryParams'
import ALL_PRODUCTS_BY_CATEGORY_QUERY from '../queries/allProductsByCategory'
import './ProductList.css'

class ProductList extends Component {

  render() {
    const { allProducts } = this.props;

    if (allProducts && allProducts.loading) {
      return <div>Loading</div>
    }
    if (allProducts && allProducts.error) {
      return <div>Error</div>
    }

    return (
      <div className="ProductList">
        {allProducts.allProducts.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    )
  }
}

export default withRouter(withApollo(graphql(ALL_PRODUCTS_BY_CATEGORY_QUERY, {
  name: 'allProducts',
  options: (props) => {
    return {
    variables: {
      category: getQueryParams(props.location.search)['category']
    }
  }}
}) (ProductList)))
