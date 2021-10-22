import React from "react";
import { useQuery } from "react-query";

const URL = process.env.NODE_ENV === "development" ? "http://localhost:3001/v1/to-do" : "/backend/v1/to-do";

const TodoList = () => {
  const { isLoading, error, data: todoList } = useQuery("TodoList", () => fetch(URL, { mode: "cors", method: "GET" }).then((res) => res.json()));

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <ul className="list-container">{todoList && todoList.length && todoList.map((i) => <li key={i._id}>{i.item_name}</li>)}</ul>;
};

export default TodoList;
