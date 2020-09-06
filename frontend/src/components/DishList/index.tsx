import React from 'react';
import { useQuery } from '@apollo/client';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import LIST_DISHES from '../../gql/LIST_DISHES';
import { GetDishes } from '../../generatedTypes/GetDishes';

type TDishListProps = {
  id: number;
};

const DishList = ({ id }: TDishListProps) => {
  const { loading, error, data } = useQuery<GetDishes>(LIST_DISHES, {
    variables: { id },
  });

  if (!id) {
    return (
      <div>
        <p>ID needs to be set to access this page</p>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <div>
          <p>Error</p>
        </div>
      </>
    );
  }

  if (loading || !data) {
    return (
      <div>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <>
      <Container>
        {data!.restaurant!.dishes!.length ? (
          data!.restaurant!.dishes!.map((restaurant) => (
            <Row
              key={restaurant!.id}
              className="text-center justify-content-md-center"
            >
              <Card style={{ width: '18rem', margin: '2rem' }} className="shadow">
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
                  <Card.Text className="text-center">
                    $
                    {restaurant!.price}
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
            </Row>
          ))
        ) : (
          <h3 className="text-center">No dishes to display</h3>
        )}
      </Container>
    </>
  );
};

export default DishList;
