import React from 'react';
import { Route } from 'react-router-dom';

import Template from 'components/Template';
// TODO: index.js at pages
import Home from 'pages/Home';
import LoginPage from 'pages/LoginPage';
import JoinPage from 'pages/JoinPage';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/join" component={JoinPage} />
      <Route path="/app/@:username?" component={Template} />
    </>
  )
}

export default App;