import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { URL } from "./TodoList";

export const AddItem = ({ refreshItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { item_name: item };
    if (item) {
      fetch(URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(body),
      }).then(() => {
        setItem("");
        refreshItem();
      });
    }
  };

  const handleOnchange = (e) => {
    setItem(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container style={{ padding: "0px" }}>
        <Row>
          <Col sm={4}>
            <Form.Control type="text" onChange={handleOnchange} value={item} />
          </Col>
          <Col>
            <Button variant="primary" type="submit" disabled={!item.length}>
              Add Item
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};
