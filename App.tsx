import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createAsyncStoragePersistor} from 'react-query/createAsyncStoragePersistor-experimental';
import {persistQueryClient} from 'react-query/persistQueryClient-experimental';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BankScreen from './src/screens/Bank.screen';

const HOURS_24 = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: HOURS_24,
    },
  },
});

const asyncStoragePersistor = createAsyncStoragePersistor({
  storage: AsyncStorage,
});

persistQueryClient({
  queryClient,
  persistor: asyncStoragePersistor,
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BankScreen />
    </QueryClientProvider>
  );
};

export default App;
