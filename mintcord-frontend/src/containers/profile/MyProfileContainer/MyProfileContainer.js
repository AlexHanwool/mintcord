import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from 'store/modules/user';
import MyProfile from 'components/profile/MyProfile';

const MyProfileContainer = ({ history }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    console.log('onLogout clicked');
    dispatch(logout());
    history.push('/login');
  }

  return (
    <MyProfile 
      onLogout={onLogout}
    />
  );
};

export default withRouter(MyProfileContainer);