import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Form from "./Form";

const StatsContainer: FC = () => {
  const [expDate, setExpDate] = useState("");
  const [username, setUsername] = useState("");

  const handleUsernameChange = async (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUsername(target.value);
  };

  const getExpDate = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/bns", {
        body: JSON.stringify({
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
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
