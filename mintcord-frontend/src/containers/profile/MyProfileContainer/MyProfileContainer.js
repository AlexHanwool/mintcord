import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from 'store/modules/auth';
import MyProfile from 'components/profile/MyProfile';

// TODO: Forbid access without auth
const MyProfileContainer = ({ history }) => {

  const dispatch = useDispatch();

  const { auth, user } = useSelector(({ auth, user }) => {
    return {
      auth: auth.auth,
      user: user.user
    };
  });

  const onLogout = () => {
    dispatch(logout());
  }

  // TODO: must move this function upper!
  useEffect(() => {
    if (!auth) {
      console.log('unauthorized >> /login');
      history.push('/login');
    }
  }, [history, auth]);

  return (auth &&
    <MyProfile
      user={user}
      onLogout={onLogout}
    />
  );
};

export default withRouter(MyProfileContainer);