import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login, initializeAuth } from 'store/modules/auth';
import { check, initializeUser } from 'store/modules/user';
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
  }, shallowEqual);
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
    dispatch(initializeAuth());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 403)
        setError(authError.response.data.message);
      else 
        setError('login failed');
      return;
    }
    else setError(null);
    
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      if (auth)
        history.push('/dev/DM/main');
      else
        dispatch(initializeUser());
    }
  }, [history, user, auth, dispatch]);

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