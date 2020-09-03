// https://nextjs.org/docs/basic-features/typescript

// https://strapi.io/blog/nextjs-react-hooks-strapi-restaurants-2

import React, { useState } from 'react';

import RestaurantList from '../components/RestaurantList/index';
import SearchInput from '../components/SearchInput/index';

const Index = () => {
  const [query, updateQuery] = useState('');

  return (
    <>
      <SearchInput query={query} updateQuery={updateQuery} />
      <RestaurantList />
    </>
  );
};
export default Index;
