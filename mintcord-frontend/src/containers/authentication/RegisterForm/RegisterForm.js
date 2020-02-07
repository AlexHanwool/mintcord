import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register, initializeForm } from 'store/modules/auth';
import AuthForm from 'components/authentication/AuthForm';

const RegisterForm = () => {
  const [error, setError] = useState(null);
  // TODO?: move form state to redux store to prevent blowing whole form by mistake
  const [form, setForm] = 
    useState({ userEmail: '', nickname: '', password: '' });
  const { auth, authError } = useSelector(({ auth }) => {
    return {
      auth: auth.auth,
      authError: auth.authError
    };
  });
  const dispatch = useDispatch();

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({...form, [name]: value});
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const { userEmail, nickname, password } = form;
    if ([userEmail, nickname, password].includes('')) {
      setError('Blanks are not allowed');
      return;
    }
    dispatch(register(form));
  }

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('register failure');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('register success');
      return;
    }
  }, [auth, authError]);

  return (
    <AuthForm 
      formType="register"
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;