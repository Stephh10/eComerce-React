import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/UserSlice";
import { toast } from "react-toastify";
import { persistor } from "../../store/store";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  async function handleLogout() {
    await await persistor.purge();
    dispatch(removeUser());
    toast.success("Successfully logged out");
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="px-4">
      <Navbar.Brand href="/">AdminPanel</Navbar.Brand>
      <Nav className="ms-auto">
        {user.currentUser && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
      </Nav>
    </Navbar>
  );
}
