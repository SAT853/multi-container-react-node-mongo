import React, { useState } from "react";

import { useQuery } from "react-query";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CloseButton from "react-bootstrap/CloseButton";
import ToastContainer from "react-bootstrap/ToastContainer";

import { AddItem } from "./Additem";

export const URL = process.env.NODE_ENV === "development" ? "http://localhost:3001/v1/to-do" : "/backend/v1/to-do";

const TodoList = () => {
  const {
    isLoading,
    error,
    data: todoList,
    refetch,
  } = useQuery("TodoList", () => fetch(URL, { mode: "cors", method: "GET" }).then((res) => res.json()));

  const [show, setShow] = useState(false);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const refreshItem = () => refetch();

  const handleDelete = (_id) => {
    if (_id) {
      fetch(URL + `/${_id}`, { method: "DELETE" }).then(() => {
        setShow(true);
        refreshItem();
      });
    }
  };

  return (
    <>
      <ToastContainer className="p-3" position={"top-end"}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Item Deleted...</strong>
          </Toast.Header>
        </Toast>
      </ToastContainer>
      <Container>
        <Row>
          <Col>
            <AddItem refreshItem={refreshItem} />
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <ul className="list-container" variant="flush" style={{ margin: "10px 0" }}>
              {todoList &&
                todoList.length > 0 &&
                todoList.map((i) => (
                  <li key={i._id}>
                    <span className={"item-text"}>{i.item_name}</span>
                    <CloseButton onClick={() => handleDelete(i._id)} />
                  </li>
                ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TodoList;
