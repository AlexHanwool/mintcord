import React from 'react';
import { Route } from 'react-router-dom';

import AppTemplate from 'components/app/AppTemplate';
import DMTemplate from 'components/app/directMessage/DMTemplate';

const AppPage = ({ match }) => {
  return (
    <AppTemplate>
      <Route path={`${match.path}/DM`} component={DMTemplate} />
      {/* <Route path="/route2" component={} /> */}
    </AppTemplate>
  );
}

export default AppPage;