import { gql } from '@apollo/client';

const GET_DISHES = gql`
query GetDishes query($id: ID!) {
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

export default GET_DISHES;
