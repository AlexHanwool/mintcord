import React from 'react';
import { Route } from 'react-router-dom';

import Template from 'components/Template';
import Home from 'pages/Home';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/app" component={Template} />
    </>
  )
}

export default App;