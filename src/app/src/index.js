import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:3000' });
const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
);

registerServiceWorker();
