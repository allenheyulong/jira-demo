import React from "react";
import { useState, useEffect } from "react";
import qs from "qs";
import { DataTable } from "./DataTable";
import { SearchQuery } from "./SearchQuery";
import { clearObj } from "utils";

const baseUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/projects?${qs.stringify(clearObj(param))}`).then(
      async (response) => {
        if (response.ok) {
          setLists(await response.json());
        }
      }
    );
  }, [param]);
  useEffect(() => {
    fetch(`${baseUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
    fetch(`${baseUrl}/projects`).then(async (response) => {
      if (response.ok) {
        setLists(await response.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchQuery users={users} param={param} setParam={setParam} />
      <DataTable lists={lists} users={users} />
    </div>
  );
};
