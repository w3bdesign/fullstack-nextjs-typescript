import React from 'react';

import type { AppProps /* , AppContext */ } from 'next/app';

import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';

import client from '../lib/Apollo';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component }: AppProps) => (
  <div>
    <Head>Test</Head>
    <h1>Her kommer header</h1>
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  </div>
);

export default App;
