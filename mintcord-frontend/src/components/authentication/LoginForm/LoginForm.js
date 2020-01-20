import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LoginForm.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const LoginForm = ({ onChange, onSignIn, onSignUp, onKakao }) => {

  return (
    <div className={cx('login-form')}>
      <input placeholder="Email address" />
      <input placeholder="password..." />
      <Button fullWidth>Sign In</Button>
      <div className={cx('login-footer')}>
        <Link to="/join">Join us!</Link>
      </div>
    </div>
  )
}

export default LoginForm;