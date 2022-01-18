import React from 'react';
import { authenticate } from '../auth';

type SigninProps = {
  authCallback: Function;
};

export const Signin = ({ authCallback }: SigninProps) => {
  return <button onClick={() => authenticate(authCallback)}>Sign In</button>;
};
