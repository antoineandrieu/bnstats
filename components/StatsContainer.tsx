import React, { FC, ChangeEvent, useState } from "react";
import Form from "./Form";

const StatsContainer: FC = () => {
  const [expDate, setExpDate] = useState("");
  const [username, setUsername] = useState("");

  const handleUsernameChange = async (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUsername(target.value);
  };

  const getExpDate = async () => {
    console.log(username);
  };

  return (
    <>
      <Form handleChange={handleUsernameChange} handleSubmit={getExpDate} />
      <div>{expDate}</div>
    </>
  );
};

export default StatsContainer;
