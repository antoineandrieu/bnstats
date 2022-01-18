import React, { FC, ChangeEventHandler, FormEventHandler } from 'react';

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
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default Form;
