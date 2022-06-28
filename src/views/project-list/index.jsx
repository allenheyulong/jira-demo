import React from "react";
import { useState, useEffect } from "react";
import qs from "qs";
import { DataTable } from "./DataTable";
import { SearchQuery } from "./SearchQuery";
import { clearObj, useDebounce, useMount } from "utils";

const baseUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);
  const debounceParam = useDebounce(param, 500);

  useEffect(() => {
    fetch(`${baseUrl}/projects?${qs.stringify(clearObj(debounceParam))}`).then(
      async (response) => {
        if (response.ok) {
          setLists(await response.json());
        }
      }
    );
  }, [debounceParam]);

  useMount(() => {
    fetch(`${baseUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchQuery users={users} param={param} setParam={setParam} />
      <DataTable lists={lists} users={users} />
    </div>
  );
};
