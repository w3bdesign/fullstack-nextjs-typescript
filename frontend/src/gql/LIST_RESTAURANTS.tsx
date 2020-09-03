import { gql } from '@apollo/client';

const LIST_RESTAURANTS = gql`
query GetMyRestaurants {
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
