import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthForm.scss';
import classNames from 'classnames/bind';

import Button from 'components/common/Button';
import ErrorMessage from 'components/authentication/ErrorMessage';

const cx = classNames.bind(styles);

const AuthForm = ({ formType, onChange, onSubmit, error }) => {

  const buttonText = {
    login: 'Sign In',
    register: 'Sign Up'
  }
  const footerStyle = formType === 'login' ?
    { textAlign: 'right' } : { textAlign: 'left' };

  return (
    <div className={cx('auth-form')}>
      <input
        name="userEmail"
        onChange={onChange}
        placeholder="Email address" />
      { formType === 'register' ? 
        <input
          name="nickname"
          onChange={onChange} 
          placeholder="Nickname" /> : null }
      <input
        name="password"
        onChange={onChange}
        placeholder="password..." />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button fullWidth onClick={onSubmit}>{buttonText[formType]}</Button>
      <div className={cx('auth-footer')} style={footerStyle}>
        { formType ==='login' ? 
          <Link to="/register">Join us!</Link> :
          <Link to="/login">sign in</Link> }
      </div>
    </div>
  )
}

export default AuthForm;