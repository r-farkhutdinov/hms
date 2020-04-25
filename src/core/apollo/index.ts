import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

interface UriConfig {
  wsUri: string;
  httpUri: string;
}

const getUriConfig = (): UriConfig => {
  const { host } = window.location;
  return {
    wsUri: `ws://${host}/`,
    httpUri: `/v1/graphql`
  };
};

const cache = new InMemoryCache({
  typePolicies: {
    guests: {
      keyFields: ["id"]
    }
  }
});

const cfg = getUriConfig();

const httpLink = (token?: string) =>
  new HttpLink({
    uri: cfg.httpUri,
    headers: {
      "X-Hasura-Admin-Secret": "secret"
    }
  });

export const client = (token?: string) =>
  new ApolloClient({
    link: httpLink(token),
    cache,
    connectToDevTools: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
        errorPolicy: "ignore"
      },
      query: { fetchPolicy: "network-only", errorPolicy: "all" }
    }
  });
