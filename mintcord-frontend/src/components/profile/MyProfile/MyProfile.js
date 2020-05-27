import React from 'react';

import styles from './MyProfile.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const MyProfile = ({ user, onInfo, onAddFriend, onLogout }) => {
  const { nickname, userId } = user;

  return (
    <div className={cx('my-profile')}>
      <div className={cx('my-icon')}>
        <img src="/icons/icon-person-anon.png" alt="" />
      </div>
      <div className={cx('my-nickname')}>
        <div className={cx('nickname')}>{nickname}</div>
        <div className={cx('user-id')}>#{userId}</div>
      </div>
      <div className={cx('my-menu')}>
        <Button theme="myprofile" onClick={onInfo}>A</Button>
        <Button theme="myprofile" onClick={onAddFriend}>B</Button>
        <Button theme="myprofile" onClick={onLogout}>C</Button>
      </div>
    </div>
  );
};

export default MyProfile;