import React from 'react';

import styles from './LoginForm.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const LoginForm = ({ onChange, onSignIn, onSignUp, onKakao }) => {

  return (
    <div className={cx('login-form')}>
      <input placeholder="Email address" />
      <input placeholder="Nickname" />
      <input placeholder="password..." />
      <hr/>
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
      <hr/>
      <Button>Join us!</Button>
    </div>
  )
}

export default LoginForm;