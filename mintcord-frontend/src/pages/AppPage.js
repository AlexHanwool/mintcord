import React from 'react';
import { Route } from 'react-router-dom';

import AppTemplate from 'components/app/AppTemplate';
import DMTemplate from 'components/app/DMTemplate';

const AppPage = ({ match }) => {
  return (
    <AppTemplate>
      <Route path={`${match.path}/1`} component={DMTemplate} />
      {/* <Route path="/route2" component={} /> */}
    </AppTemplate>
  );
}

export default AppPage;