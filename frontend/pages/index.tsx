// https://nextjs.org/docs/basic-features/typescript

import { useQuery, gql } from '@apollo/client';

const FETCH_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      name
      description
    }
  }
`;

const Index = () => {
  const { loading, error, data } = useQuery(FETCH_RESTAURANTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  //return <h1>Graphql see console.log</h1>;

  return data.restaurants.map(({ name, description }) => (
    <div key={name}>
      <p>
        {name}
        <br />
        {description}
      </p>
    </div>
  ));
};

export default Index;
