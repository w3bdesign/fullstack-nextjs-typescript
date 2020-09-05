import { gql } from '@apollo/client';

const LIST_DISHES = gql`
  query GetDishes($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

export default LIST_DISHES;
