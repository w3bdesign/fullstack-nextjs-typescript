// https://nextjs.org/docs/basic-features/typescript

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

type TRestaurant = {
  id: number;
  name: string;
  description: string;
  image: { url: string };
};

const FETCH_RESTAURANTS = gql`
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

const Index = () => {
  const { loading, error, data } = useQuery(FETCH_RESTAURANTS);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error!</p>
      </div>
    );
  }

  return data.restaurants.map(
    ({
      id, name, description, image,
    }: TRestaurant) => (
      <Row key={id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`http://localhost:1338${image.url}`} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Text</Button>
          </Card.Body>
        </Card>
      </Row>
    ),
  );
};

export default Index;
