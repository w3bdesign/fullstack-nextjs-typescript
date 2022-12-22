import React, { useState } from 'react';

import type { AppProps /* , AppContext */ } from 'next/app';

import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import Cookie from 'js-cookie';
import fetch from 'axios';

import AppContext from '../context/AppContext';
import client from '../lib/Apollo';
import Header from '../components/Layout/header';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component }: AppProps) => {
  const [user, setUser] = useState(null);

  return (
    <>
      <Head>
        <title>
          Food ordering application
        </title>
      </Head>
      <AppContext.Provider
        value={{
          user,
          isAuthenticated: !!user,
          setUser,
        }}
      >
        <Header />
        <ApolloProvider client={client}>
          <Component />
        </ApolloProvider>
      </AppContext.Provider>
    </>
  );
};

export default App;
