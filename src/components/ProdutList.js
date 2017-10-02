import React, { Component } from 'react'
import { graphql, withApollo } from 'react-apollo'
import { withRouter } from 'react-router'
import Product from './Product'
import Search from './Search'
import getQueryParams from '../utils/getQueryParams'
import ALL_PRODUCTS_BY_CATEGORY_QUERY from '../queries/allProductsByCategory'
import ALL_PRODUCTS_BY_TERM_QUERY from '../queries/allProductsByTerm'
import './ProductList.css'

class ProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }

    this._handleSearch = this._handleSearch.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.allProducts.allProducts
    })
  }

  _handleSearch = async (text) => {
    const results = await this.props.client.query({
      query: ALL_PRODUCTS_BY_TERM_QUERY,
      variables: {searchText: text}
    })
    const products = results.data.allProducts
    this.setState({ products })
  }

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
        <Search search={this._handleSearch} />
        {this.state.products.map(product => (
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
