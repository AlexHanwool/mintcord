import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { register, initializeAuth } from 'store/modules/auth';
import AuthForm from 'components/authentication/AuthForm';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  // TODO?: move form state to redux store to prevent blowing whole form by mistake
  const [form, setForm] = 
    useState({ userEmail: '', nickname: '', password: '' });
  const { auth, authError, user } = useSelector(({ auth, user }) => {
    return {
      auth: auth.auth,
      authError: auth.authError,
      user: user.user
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
    dispatch(initializeAuth());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409)
        setError('already registered Email address');
      else 
        setError('register failed');
      return;
    }
    // TODO: how to care register success?
  }, [authError]);

  useEffect(() => {
    if (user) {
      history.push('/dev/DM/main');
    }
  }, [history, user]);

  return (
    <AuthForm 
      formType="register"
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);