import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import userContext from "../contexts/user-context";
export default function NavBar() {
  const { list } = useContext(userContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>FRIENDS</Navbar.Brand>
        <Navbar.Brand>{list.length}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
