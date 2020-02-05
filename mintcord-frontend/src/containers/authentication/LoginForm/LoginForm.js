import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from 'components/authentication/AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onChange = event => {
    const { value, name } = e.target;
  }

  const onSubmit = event => {
    event.preventDefault();
  }
  
  return (
    <AuthForm 
      formType="login"
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;