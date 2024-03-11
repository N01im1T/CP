import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import CryptoList from './src/CryptoList';

const App = () => {
  return (
    <Provider store={store}>
      <CryptoList />
    </Provider>
  );
};

export default App;
