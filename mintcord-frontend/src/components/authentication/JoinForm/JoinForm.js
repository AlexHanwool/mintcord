import React from 'react';
import { Link } from 'react-router-dom';

import styles from './JoinForm.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const JoinForm = ({ onChange, onSignIn, onSignUp, onKakao }) => {

  return (
    <div className={cx('join-form')}>
      <input placeholder="Email address" />
      <input placeholder="Nickname" />
      <input placeholder="password..." />
      <Button fullWidth>Sign Up</Button>
      <div className={cx('join-footer')}>
        <Link to="/join">login</Link>
      </div>
    </div>
  )
}

export default JoinForm;