import React from 'react';

import AuthTemplate from 'components/authentication/AuthTemplate';
import AuthForm from 'components/authentication/AuthForm';

const JoinPage = () => {
  return (
    <AuthTemplate>
      <AuthForm formType="join" />
    </AuthTemplate>
  );
}

export default JoinPage;