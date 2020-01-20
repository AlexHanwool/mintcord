import React from 'react';

import AuthTemplate from 'components/authentication/AuthTemplate';
import LoginForm from 'components/authentication/LoginForm';

const LoginPage = () => {
  return (
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
  );
}

export default LoginPage;