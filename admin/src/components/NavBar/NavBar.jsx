import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="px-4">
      <Navbar.Brand href="/">AdminPanel</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#pricing">Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
}
