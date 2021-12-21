import React, { useContext } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import userContext from "../contexts/user-context";
import { nanoid } from "nanoid";

export default function ListUsers() {
  const { list, dispatch } = useContext(userContext);

  return (
    <Container>
      <ListGroup>
        {list.map((item) => (
          <ListGroup.Item key={nanoid()}>
            {item.name + " " + item.age}
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "REMOVE-FRIEND", user: { id: item.id } });
              }}
              variant="danger"
            >
              REMOVE
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
