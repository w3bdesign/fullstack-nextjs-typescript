import { gql } from '@apollo/client';

const LIST_RESTAURANTS = gql`
query GetRestaurants {
  restaurants {
    id
    name
    description
    image {
      url
    }
  }
}
`;

export default LIST_RESTAURANTS;
