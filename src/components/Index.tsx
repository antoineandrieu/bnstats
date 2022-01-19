import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Form from './Form';
import { getUserData } from '../auth';
import DataContainer from './DataContainer';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: auto;
  margin-bottom: auto;
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
      <Form
        input={bnsId}
        handleChange={handleBnsIdChange}
        handleSubmit={getExpDate}
        authCallback={authCallback}
      />
      <DataContainer isLoading={isLoading} expDate={expDate} />
    </MainContainer>
  );
};

export default Index;
