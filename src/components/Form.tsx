import React, { FC, ChangeEventHandler, FormEventHandler } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form``;

interface FormProps {
  input: string;
  handleChange: ChangeEventHandler;
  handleSubmit: FormEventHandler;
}

const Form: FC<FormProps> = ({
  input,
  handleChange,
  handleSubmit,
}: FormProps) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="username">Stacks BNS Id</label>
      <input
        id="bnsid"
        name="bnsid"
        type="text"
        autoComplete="bnsid"
        required
        onChange={handleChange}
        value={input}
      />
      <button type="submit">Read Info</button>
    </StyledForm>
  );
};

export default Form;
