import React from 'react';

import AuthTemplate from 'components/authentication/AuthTemplate';
import RegisterForm from 'containers/authentication/RegisterForm';

const JoinPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
}

export default JoinPage;