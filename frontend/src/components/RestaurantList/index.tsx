import React from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import LIST_RESTAURANTS from '../../gql/LIST_RESTAURANTS';
import { GetMyRestaurants } from '../../generatedTypes/GetMyRestaurants';

type TRestaurantListProps = {
  query: string;
};

const RestaurantList = ({ query }: TRestaurantListProps) => {
  const { loading, error, data } = useQuery<GetMyRestaurants>(LIST_RESTAURANTS);

  if (loading || !data) {
    return (
      <Container>
        <Row
          className="text-center justify-content-md-center"
          style={{ marginTop: '2rem' }}
        >
          Loading ...
          <br />
          <Spinner animation="border" variant="primary" />
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error!</p>
      </div>
    );
  }

  const searchQuery = data!.restaurants!.filter((filtered) => filtered!.name.toLowerCase().includes(query));
  const restaurantsToShow = searchQuery || data.restaurants;

  return (
    <Container>
      {restaurantsToShow.length ? (
        restaurantsToShow.map((restaurant) => (
          <Row
            key={restaurant!.id}
            className="text-center justify-content-md-center"
          >
            <Card
              style={{ maxWidth: '20rem', margin: '2rem' }}
              className="shadow"
            >
              <Card.Img
                variant="top"
                src={`${process.env.NEXT_PUBLIC_API_URL}${
                  restaurant!.image!.url
                } `}
              />
              <Card.Body>
                <Card.Title>{restaurant!.name}</Card.Title>
                <Card.Text className="text-left">
                  {restaurant!.description}
                </Card.Text>
                <Link
                  as={`/restaurants/${restaurant!.id}`}
                  href={`/restaurants?id=${restaurant!.id}`}
                >
                  <Button variant="primary">List Dishes</Button>
                </Link>
              </Card.Body>
            </Card>
          </Row>
        ))
      ) : (
        <Row className="text-center justify-content-md-center">
          <Card
            style={{ minWidth: '20rem', margin: '2rem' }}
            className="shadow"
          >
            <Card.Body>
              <Card.Text className="text-center">
                No restaurants to display
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      )}
    </Container>
  );
};

export default RestaurantList;
