import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './app';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

const root = document.getElementById('app');
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <HashRouter>
          <App />
        </HashRouter>
      </ApolloProvider>
    </React.StrictMode>,
  );
}
