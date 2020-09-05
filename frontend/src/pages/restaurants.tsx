import React from 'react';
import { useRouter } from 'next/router';

import DishList from '../components/DishList/index';

const Restaurants = () => {
  const router = useRouter();
  console.log('Restaurants router: ');
  console.log(router.query.id);
  return (
    <>
      <h1>List dishes from restaurant</h1>
      <br />
      <DishList id={router.query.id} />
    </>
  );
};
export default Restaurants;
