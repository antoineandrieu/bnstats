import React, { FC, ChangeEventHandler, FormEventHandler } from 'react';
import styled from 'styled-components';
import { Signin } from './Signin';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 12rem;
`;

const FormHead = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Label = styled.label`
  text-align: right;
`;

const Button = styled.button`
  margin-top: 5rem;
`;

interface FormProps {
  input: string;
  handleChange: ChangeEventHandler;
  handleSubmit: FormEventHandler;
  authCallback: Function;
}

const Form: FC<FormProps> = ({
  input,
  handleChange,
  handleSubmit,
  authCallback,
}: FormProps) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormHead>
        <Signin authCallback={authCallback} />
        <Label htmlFor="username">or enter your Stacks BNS Id</Label>
      </FormHead>
      <input
        id="bnsid"
        name="bnsid"
        type="text"
        autoComplete="bnsid"
        required
        onChange={handleChange}
        value={input}
      />
      <Button type="submit">Read Info</Button>
    </StyledForm>
  );
};

export default Form;
