import React from "react";
import { User } from "./DataTable";

interface SearchQueryProps {
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchQueryProps["param"]) => void;
  users: User[];
}

export const SearchQuery = ({ param, setParam, users }: SearchQueryProps) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={(e) =>
          setParam({
            ...param,
            personId: e.target.value,
          })
        }
      >
        <option value={""}>负责人</option>
        {users.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
