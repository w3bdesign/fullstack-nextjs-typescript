import React from 'react';
import { useQuery } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import LIST_RESTAURANTS from '../../gql/LIST_RESTAURANTS';

export type TRestaurant = {
  id: number;
  name: string;
  description: string;
  image: { url: string };
};

const RestaurantList = () => {
  const { loading, error, data } = useQuery(LIST_RESTAURANTS);

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

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Search restaurants</Form.Label>
          <Form.Control type="text" placeholder="Enter restaurant name" style={{ width: '20rem', margin: '2rem' }} className="justify-content-md-center" />
        </Form.Group>
      </Form>

      {data.restaurants.map(({
        id, name, description, image,
      }: TRestaurant) => (
        <Container>
          <Row key={id} className="justify-content-md-center">
            <Card style={{ width: '18rem', margin: '2rem' }}>
              <Card.Img
                variant="top"
                src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`}
              />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Text</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default RestaurantList;
