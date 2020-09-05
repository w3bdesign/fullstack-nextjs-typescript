import React from 'react';
import { useQuery } from '@apollo/client';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import LIST_DISHES from '../../gql/LIST_DISHES';
import { GetDishes } from '../../generatedTypes/GetDishes';

type TDishListProps = {
  query: string;
};

const DishList = (props: any) => {
  const { loading, error, data } = useQuery<GetDishes>(LIST_DISHES);

  console.log(props);

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

  // const searchQuery = data!.restaurants!.filter((filtered) => filtered!.name.toLowerCase().includes(query));
  // const restaurantsToShow = searchQuery || data.restaurants;

  return (
    <>
      <Container>Dishes!</Container>
    </>
  );
};

export default DishList;
