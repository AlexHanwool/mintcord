import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login, initializeForm } from 'store/modules/auth';
import { check } from 'store/modules/user';
import AuthForm from 'components/authentication/AuthForm';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  // TODO?: move form state to redux store to prevent blowing whole form by mistake
  const [form, setForm] = useState({ userEmail: '', password: '' });
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

    const { userEmail, password } = form;
    if ([userEmail, password].includes('')) {
      setError('Blanks are not allowed');
      return;
    }
    dispatch(login(form));
  }
  
  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('login failure');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('login success!');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('user login validated');
      history.push('/dev/DM/main');
    }
  }, [user]);

  return (
    <AuthForm 
      formType="login"
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);