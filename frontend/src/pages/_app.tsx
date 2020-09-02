import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';

import client from '../lib/Apollo';

const App = ({ Component, pageProps, children }) => {
  return (
    <>
      <Head></Head>
      <h1>Her kommer header</h1>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider> 
    </>
  );
};

export default App;
