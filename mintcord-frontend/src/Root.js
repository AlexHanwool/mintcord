import React from 'react';
import { Router } from 'react-router-dom';

import customHistory from 'lib/history';

const Root = () => {
  return (
    <Router history={customHistory}>
      hello, world!
      {/* <App/> */}
    </Router>
  );
}

export default Root;