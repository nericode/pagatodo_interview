import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import BankScreen from './src/screens/Bank.screen';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BankScreen />
    </QueryClientProvider>
  );
};

export default App;
