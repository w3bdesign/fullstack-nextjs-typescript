import React from 'react';
import { useQuery } from '@apollo/client';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import LIST_DISHES from '../../gql/LIST_DISHES';
import { GetDishes } from '../../generatedTypes/GetDishes';

type TDishListProps = {
  id: number;
};

const DishList = ({ id }: TDishListProps) => {
  const { loading, error, data } = useQuery<GetDishes>(LIST_DISHES, { variables: { id } });

  console.log('ID from Dishlist: ');
  console.log(id);
  console.log(error);

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
          <p>
            Error

          </p>
        </div>
      </>
    );
  }

  if (loading || !data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // const searchQuery = data!.restaurants!.filter((filtered) => filtered!.name.toLowerCase().includes(query));
  // const restaurantsToShow = searchQuery || data.restaurants;

  return (
    <>
      <Container>
        Dishes! ID:
        {id}
      </Container>
    </>
  );
};

export default DishList;
