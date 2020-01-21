import React from 'react';

import AuthTemplate from 'components/authentication/AuthTemplate';
import AuthForm from 'components/authentication/AuthForm';

const LoginPage = () => {
  return (
      <AuthTemplate>
        <AuthForm formType="login" />
      </AuthTemplate>
  );
}

export default LoginPage;