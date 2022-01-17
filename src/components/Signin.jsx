import React from 'react';
import { authenticate } from '../auth';

export const Signin = () => {
  return <button onClick={() => authenticate()}>Sign In</button>;
};
