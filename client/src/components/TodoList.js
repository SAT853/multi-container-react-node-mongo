import React from "react";
import { useQuery } from "react-query";

const TodoList = () => {
  const { isLoading, error, data: todoList } = useQuery("TodoList", () => fetch("v1/to-do").then((res) => res.json()));
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <ul className="list-container">{todoList && todoList.length && todoList.map((i) => <li key={i._id}>{i.item_name}</li>)}</ul>;
};

export default TodoList;
