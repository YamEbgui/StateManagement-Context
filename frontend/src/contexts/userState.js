import React, { useReducer } from "react";
import userContext from "./user-context";
import { userReducer } from "../reducers/userReducer";
import { db } from "../db/listOfUsers";
const UserState = (props) => {
  const [list, dispatch] = useReducer(userReducer, [...db]);

  return (
    <userContext.Provider
      value={{
        list,
        dispatch,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
