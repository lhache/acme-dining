import { gql } from 'react-apollo'

const ALL_PRODUCTS_BY_TERM_QUERY = gql`
  query AllProductsSearchQuery($searchText: String!) {
    allProducts(filter: {
      OR: [{
        title_contains: $searchText
      }, {
        description_contains: $searchText
      }]
    }) {
      id
      title
      description
    }
  }
`

export default ALL_PRODUCTS_BY_TERM_QUERY
