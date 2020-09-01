import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1338', // TODO Change this based on development or production
  cache: new InMemoryCache()
});

export default client