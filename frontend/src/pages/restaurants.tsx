import React from 'react';
import { useRouter } from 'next/router';

import DishList from '../components/DishList/index';

const Restaurants = () => {
  const router = useRouter();
  const idParameter = router.query.id || '1';

  return (
    <>
      <DishList id={idParameter} />
    </>
  );
};
export default Restaurants;
