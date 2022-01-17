import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Form from './Form';

const StatsContainer: FC = () => {
  const [expDate, setExpDate] = useState('');
  const [username, setUsername] = useState('');
  const [namespace, setNamespace] = useState('');

  const handleUsernameChange = async (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUsername(target.value.split('.')[0]);
    setNamespace(target.value.split('.')[1]);
  };

  const getExpDate = async (event: FormEvent) => {
    event.preventDefault();
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
  };

  return (
    <>
      <Form handleChange={handleUsernameChange} handleSubmit={getExpDate} />
      <div>{expDate}</div>
    </>
  );
};

export default StatsContainer;
