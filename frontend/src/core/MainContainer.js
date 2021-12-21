import React from "react";
import NavBar from "./NavBar";
import UserState from "../contexts/userState";
import ListUsers from "./ListUsers";
import AddForm from "./AddForm";

export default function MainContainer() {
  return (
    <div>
      <UserState>
        <NavBar />
        <AddForm />
        <ListUsers />
      </UserState>
    </div>
  );
}
