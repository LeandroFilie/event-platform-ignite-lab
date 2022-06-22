import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omwjh40ip301z48jvp1e06/master',
  cache: new InMemoryCache()
})