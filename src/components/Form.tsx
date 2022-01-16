import React, { FC, ChangeEventHandler, FormEventHandler } from "react";

interface FormProps {
  handleChange: ChangeEventHandler;
  handleSubmit: FormEventHandler;
}

const Form: FC<FormProps> = ({ handleChange, handleSubmit }: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Stacks BNS Username</label>
      <input
        id="username"
        name="username"
        type="text"
        autoComplete="username"
        required
        onChange={handleChange}
      />
      <button type="submit">Read Info</button>
    </form>
  );
};

export default Form;
