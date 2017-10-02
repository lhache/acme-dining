import { gql } from 'react-apollo'

const ALL_PRODUCTS_BY_CATEGORY_QUERY = gql`
  query AllProductsQuery($category: String!) {
    allProducts (filter: {
      category: {
        name_contains: $category
      }
    }) {
      id
      title
      description
      category {
        name
      }
    }
  }
`

export default ALL_PRODUCTS_BY_CATEGORY_QUERY
