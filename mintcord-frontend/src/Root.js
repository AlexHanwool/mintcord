import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import configure from 'store/configure';
import customHistory from 'lib/history';

const store = configure();

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={customHistory}>
        hello, world!
        {/* <App/> */}
      </Router>
    </Provider>
  );
}

export default Root;