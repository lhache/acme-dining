import { gql } from 'react-apollo'

 const ALL_CATEGORIES_QUERY = gql`
  query AllCategoriesQuery {
    allCategories {
      id
      name
    }
  }
`
export default ALL_CATEGORIES_QUERY
