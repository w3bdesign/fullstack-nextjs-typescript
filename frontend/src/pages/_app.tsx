import React from 'react';

import type { AppProps /* , AppContext */ } from 'next/app';

import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';

import client from '../lib/Apollo';
import Header from '../components/Layout/header';
import Footer from '../components/Layout/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component }: AppProps) => (
  <div>
    <Head><title>Food ordering fullstack application with NextJS and Strapi</title></Head>
    <Header />
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
    <Footer />
  </div>
);

export default App;
