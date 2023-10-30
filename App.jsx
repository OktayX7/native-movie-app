import React from 'react';
import {AppNavigation} from './src/navigation';
import {AppStoreProvider} from './src/providers';
const App = () => {
  return (
    <AppStoreProvider>
      <AppNavigation />
    </AppStoreProvider>
  );
};

export default App;
