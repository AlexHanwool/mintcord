import React from 'react';

import AuthTemplate from 'components/authentication/AuthTemplate';
// import AuthForm from 'components/authentication/AuthForm';
import LoginForm from 'containers/authentication/LoginForm';

const LoginPage = () => {
  return (
      <AuthTemplate>
        {/* <AuthForm formType="login" /> */}
        <LoginForm />
      </AuthTemplate>
  );
}

export default LoginPage;