import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Main from '~/pages/main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
