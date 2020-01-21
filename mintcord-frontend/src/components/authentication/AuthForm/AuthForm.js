import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthForm.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const AuthForm = ({ formType }) => {

  const buttonText = {
    login: 'Sign In',
    join: 'Sign Up'
  }
  const footerStyle = formType === 'login' ?
    { textAlign: 'right' } : { textAlign: 'left' };

  return (
    <div className={cx('auth-form')}>
      <input placeholder="Email address" />
      { formType === 'join' ? 
        <input placeholder="Nickname" /> : null }
      <input placeholder="password..." />
      <Button fullWidth>{buttonText[formType]}</Button>
      <div className={cx('auth-footer')} style={footerStyle}>
        { formType ==='login' ? 
          <Link to="/join">Join us!</Link> :
          <Link to="/login">sign in</Link> }
      </div>
    </div>
  )
}

export default AuthForm;