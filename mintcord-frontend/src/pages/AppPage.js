import React from 'react';
import { Route } from 'react-router-dom';

import AppTemplate from 'components/app/AppTemplate';
import DMTemplate from 'components/app/directMessage/DMTemplate';
import GameSceneTemplate from 'components/game/GameSceneTemplate';

const AppPage = ({ match }) => {
  return (
    <AppTemplate>
      <Route path={`${match.path}/DM`} component={DMTemplate} />
      <Route path={`${match.path}/game`} component={GameSceneTemplate} />
    </AppTemplate>
  );
}

export default AppPage;