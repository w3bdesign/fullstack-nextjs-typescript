import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1338/graphql', // TODO Fetch from .env and check if development or production
  cache: new InMemoryCache()
});

export default client