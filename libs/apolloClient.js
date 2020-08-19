import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

//TODO: create env variable for HASURA ADMIN SECRET

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: process.env.HASURA_GRAPHQL_ENDPOINT + '/v1/graphql',
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
      },
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}