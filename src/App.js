import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/',
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <p>Pika Pika</p>
      </main>
    </ApolloProvider>
  );
}

export default App;
