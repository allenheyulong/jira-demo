import React, { FormEvent } from "react";

export const Login = () => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response: Response) => {
      if (response.ok) {
      }
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">username</label>
      <input type="text" id="username" />

      <label htmlFor="password">password</label>
      <input type="text" id="password" />

      <button type="submit">登录</button>
    </form>
  );
};
