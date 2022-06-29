import React from "react";
import { useArray, useMount } from "utils";

export const TryUseTest = () => {
  const person: {
    name: string;
    age: number;
  }[] = [
    {
      name: "Jack",
      age: 14,
    },
    {
      name: "Allen",
      age: 30,
    },
  ];

  const { value, clear, removeIndex, add } = useArray(person);

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 18 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear persons
      </button>

      {value.map((person: { name: string; age: number }, index: number) => {
        return (
          <div key={index} style={{ marginBottom: "30px" }}>
            <span style={{ color: "red" }}>{index}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        );
      })}
    </div>
  );
};
