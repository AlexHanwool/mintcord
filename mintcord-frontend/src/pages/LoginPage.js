import React from 'react';

import AuthTemplate from 'components/authentication/AuthTemplate';
import LoginForm from 'containers/authentication/LoginForm.js';

const LoginPage = () => {
  return (
      <AuthTemplate>
        {/* <AuthForm formType="login" /> */}
        <LoginForm />
      </AuthTemplate>
  );
}

export default LoginPage;