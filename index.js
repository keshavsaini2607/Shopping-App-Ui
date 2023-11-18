/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {store} from './src/context/store';

const client = new QueryClient();

// Wrap the App component inside the QueryClientProvider
const RootComponent = () => (
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);

// Register the RootComponent with the AppRegistry
AppRegistry.registerComponent(appName, () => RootComponent);
