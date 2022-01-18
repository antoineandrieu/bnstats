import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import Form from './Form';
import { Signin } from './Signin';
import { getUserData } from '../auth';

const StatsContainer: FC = () => {
  const [expDate, setExpDate] = useState('');
  const [bnsId, setBnsId] = useState('');
  const [username, setUsername] = useState('');
  const [namespace, setNamespace] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedin, setIsSignedin] = useState(false);

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setBnsId(userData.username);
      setUsername(bnsId.split('.')[0]);
      setNamespace(bnsId.split('.')[1]);
    }
  }, [isSignedin]);

  const authCallback = () => {
    setIsSignedin(true);
  };

  const handleUsernameChange = async (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUsername(target.value.split('.')[0]);
    setNamespace(target.value.split('.')[1]);
  };

  const getExpDate = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/bns', {
        body: JSON.stringify({
          username,
          namespace,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const result = await res.json();
      setExpDate(result.expDate);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Signin authCallback={authCallback} />
      <Form
        input={bnsId}
        handleChange={handleUsernameChange}
        handleSubmit={getExpDate}
      />
      <div>{isLoading ? 'loading...' : expDate}</div>
    </>
  );
};

export default StatsContainer;
