import React from 'react';

import styles from './LoginForm.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const LoginForm = ({ onChange, onSignIn, onSignUp, onKakao }) => {

  return (
    <div className={cx('login-form')}>
      <div className={cx('local-login')}>
        <input className={cx('login-input')}
          placeholder="Email address"
        />
        <input className={cx('login-input')}
          placeholder="Nickname"
        />
        <input className={cx('login-input')}
          placeholder="password..."
        />
        <hr/>
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
        <hr/>
        <Button>Join us!</Button>
      </div>
      <div className={cx('social-login')}>
        Social
      </div>
    </div>
  )
}

export default LoginForm;