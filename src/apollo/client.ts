import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql', // Update this with your GraphQL server URL
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
}); 