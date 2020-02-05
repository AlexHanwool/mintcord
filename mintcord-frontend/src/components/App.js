import React from 'react';
import { Route } from 'react-router-dom';

import Template from 'components/Template';
// TODO: index.js at pages
import Home from 'pages/Home';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import AppPage from 'pages/AppPage';

const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/app/@:username?" component={Template} />
      <Route path="/dev" component={AppPage} />
    </>
  )
}

export default App;