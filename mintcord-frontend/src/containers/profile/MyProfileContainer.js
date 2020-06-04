import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from 'store/modules/auth';
import { showModal } from 'store/modules/base';
import MyProfile from 'components/profile/MyProfile';

// TODO: Forbid access without auth
const MyProfileContainer = ({ history }) => {

  const dispatch = useDispatch();

  const { auth, user } = useSelector(({ auth, user }) => {
    return {
      auth: auth.auth,
      user: user.user,
    };
  });
  const checkLoading = useSelector(({ loading }) => loading['user/CHECK']);

  const onLogout = () => {
    // clean up all redux store
    dispatch(logout());
  }
  const onInfo = () => {
    dispatch(showModal('info'));
  }
  const onAddFriend = () => {
    dispatch(showModal('addFriend'));
  }

  // TODO: must move this function upper!
  useEffect(() => {
    if (checkLoading === false && !auth) {
      console.log('unauthorized >> /login');
      history.push('/login');
    }
  }, [history, auth, checkLoading]);

  return (auth &&
    <MyProfile
      user={user}
      onInfo={onInfo}
      onAddFriend={onAddFriend}
      onLogout={onLogout}
    />
  );
};

export default withRouter(MyProfileContainer);