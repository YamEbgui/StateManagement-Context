import React, { useContext, useState } from "react";
import EditForm from "./EditForm";
import { Button } from "react-bootstrap";
import userContext from "../contexts/user-context";

export default function User({ user }) {
  const { dispatch } = useContext(userContext);
  const [isChangeable, setChangeable] = useState(false);

  const handleEditChange = () => {
    setChangeable(!isChangeable);
  };

  return (
    <div>
      {!isChangeable && (
        <>
          <Button variant="success" onClick={handleEditChange}>
            {" "}
            Edit
          </Button>
          <DataComp type="name" payload={user} />
          <DataComp type="age" payload={user} />
        </>
      )}
      {isChangeable && (
        <>
          <EditForm stopEditFunc={handleEditChange} payload={user} />
        </>
      )}
      <Button
        variant="danger"
        onClick={(e) => dispatch({ type: "REMOVE-FRIEND", user: user })}
      >
        REMOVE
      </Button>
    </div>
  );
}

function DataComp({ type, payload }) {
  function returnData() {
    switch (type) {
      case "name":
        return payload.name;
      case "age":
        return payload.age;
      default:
        break;
    }
  }
  return (
    <div>
      <p>{returnData()}</p>
    </div>
  );
}
