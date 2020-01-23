import React from 'react';
import { Route } from 'react-router-dom';

import styles from './DMTemplate.scss';
import classNames from 'classnames/bind';

import DMChat from 'components/app/directMessage/DMChat';
import DMFriendsList from 'components/app/directMessage/DMFriendsList';
import DMMenu from 'components/app/directMessage/DMMenu';

const cx = classNames.bind(styles);

const DMTemplate = ({ match }) => {
  return (
    <div className={cx('dm-template')}>
      <DMMenu />
      <Route path={`${match.path}/main`} component={DMFriendsList} />
      <Route path={`${match.path}/@:userId`} component={DMChat} /> 
    </div>
  );
};

export default DMTemplate;