// https://nextjs.org/docs/basic-features/typescript
// https://strapi.io/blog/nextjs-react-hooks-strapi-restaurants-2

import React, { useState, useCallback } from 'react';

import RestaurantList from '../components/RestaurantList/index';
import SearchInput from '../components/SearchInput/index';

const Index = () => {
  const [query, updateQuery] = useState<string>('');
  const updateSearchTerm = useCallback(
    (value) => {
      // We prevent re-rendering of the input field each time we type with useCallback
      console.log(`Changed query: ${value}`);
      // updateQuery(value);
    },
    [],
  );
  return (
    <>
      <SearchInput
        // query={query}
        // updateQuery={updateQuery}
        updateSearchTerm={updateSearchTerm}
      />
      <RestaurantList query={query} />
    </>
  );
};
export default Index;
