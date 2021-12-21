import React, { useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import userContext from "../contexts/user-context";
import User from "./User";

export default function ListUsers() {
  const { list } = useContext(userContext);

  return (
    <Container>
      <ListGroup>
        {list.map((item) => (
          <ListGroup.Item>
            <User user={item} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
