import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Form from './Form';
import { Signin } from './Signin';
import { getUserData } from '../auth';
import Title from './Title';

const MainContainer = styled.div`
  display: grid;
  min-height: 90vh;
  grid-template-rows: 40% 60%;
`;

const Index: FC = () => {
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
      setUsername(userData.username.split('.')[0]);
      setNamespace(userData.username.split('.')[1]);
    }
  }, [isSignedin]);

  const authCallback = () => {
    setIsSignedin(true);
  };

  const handleBnsIdChange = async (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setBnsId(target.value);
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
    <MainContainer>
      <Title />

      <Signin authCallback={authCallback} />
      <Form
        input={bnsId}
        handleChange={handleBnsIdChange}
        handleSubmit={getExpDate}
      />
      <div>{isLoading ? 'loading...' : `expires at ${expDate}`}</div>
    </MainContainer>
  );
};

export default Index;
