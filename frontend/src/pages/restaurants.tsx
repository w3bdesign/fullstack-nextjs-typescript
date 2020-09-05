import React from 'react';
import { useRouter } from 'next/router';

import DishList from '../components/DishList/index';

const Restaurants = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <h1>List dishes from restaurant</h1>
      <br />
      <DishList id={1} />
    </>
  );
};
export default Restaurants;
