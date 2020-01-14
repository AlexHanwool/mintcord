import React from 'react';
import { Router } from 'react-router-dom';
import App from 'components/App';

import customHistory from 'lib/history';

const Root = () => {
  return (
    <Router history={customHistory}>
      <App/>
      {/* hello, world! */}
    </Router>
  );
}

export default Root;