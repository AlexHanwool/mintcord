import React from 'react';

import AuthTemplate from 'components/authentication/AuthTemplate';
import JoinForm from 'components/authentication/JoinForm';

const JoinPage = () => {
  return (
    <AuthTemplate>
      <JoinForm />
    </AuthTemplate>
  );
}

export default JoinPage;