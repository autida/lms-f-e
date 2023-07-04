import React, { useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Student from "./contents/Student";
import Admin from "./contents/Admin";

const AuthContent = () => {
  const authCred = useAuth();
  // let roleRef = useRef();

  // useEffect(() => {
  //   roleRef = authCred.auth.role;
  // });

  return authCred.auth.role === "2001" ? <Student /> : <Admin />;
};

export default AuthContent;
