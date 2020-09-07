import React from 'react';

import type { AppProps /* , AppContext */ } from 'next/app';

import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import Cookie from 'js-cookie';
import fetch from 'axios';

import AppContext from '../context/AppContext';
import client from '../lib/Apollo';
import Header from '../components/Layout/header';
import Footer from '../components/Layout/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component }: AppProps) => (
  <>
    <Head>
      <title>Food ordering fullstack application with NextJS and Strapi</title>
    </Head>
    <AppContext.Provider
      value={{
        user: 'no-user',
        // isAuthenticated: !!this.state.user,
        isAuthenticated: false,
        // setUser: this.setUser,
      }}
    >
      <Header />
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
    </AppContext.Provider>
    <Footer />
  </>
);

export default App;
