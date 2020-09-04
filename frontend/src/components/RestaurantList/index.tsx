import React from 'react';
import { useQuery } from '@apollo/client';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import LIST_RESTAURANTS from '../../gql/LIST_RESTAURANTS';
import { GetMyRestaurants } from '../../generatedTypes/GetMyRestaurants';

type TRestaurantListProps = {
  query: string;
};

const RestaurantList = ({ query }: TRestaurantListProps) => {
  const { loading, error, data } = useQuery<GetMyRestaurants>(LIST_RESTAURANTS);

  if (loading || !data) {
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

  const searchQuery = data!.restaurants!.filter((filtered) => filtered!.name.toLowerCase().includes(query));
  const restaurantsToShow = searchQuery || data.restaurants;

  return (
    <>
      <Container>
        {data.restaurants
          && restaurantsToShow.map((restaurant) => (
            <Row
              key={restaurant!.id}
              className="text-center justify-content-md-center"
            >
              <Card style={{ width: '18rem', margin: '2rem' }}>
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
                  <Button variant="primary">Text</Button>
                </Card.Body>
              </Card>
            </Row>
          ))}
      </Container>
    </>
  );
};

export default RestaurantList;
