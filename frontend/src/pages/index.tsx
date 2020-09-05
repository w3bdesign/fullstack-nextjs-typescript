// https://nextjs.org/docs/basic-features/typescript
// https://strapi.io/blog/nextjs-react-hooks-strapi-restaurants-2
// https://strapi.io/blog/nextjs-react-hooks-strapi-dishes-3

import React, { useState } from 'react';

import RestaurantList from '../components/RestaurantList/index';
import SearchInput from '../components/SearchInput/index';

const Index = () => {
  const [query, updateQuery] = useState<string>('');

  return (
    <>
      <SearchInput updateQuery={updateQuery} />
      <RestaurantList query={query} />
    </>
  );
};
export default Index;
