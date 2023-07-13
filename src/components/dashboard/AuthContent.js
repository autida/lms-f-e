import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Student from "./contents/Student";
import Admin from "./contents/Admin";
import Cookies from "js-cookie";
import Layout from "../Layout";

const AuthContent = () => {
  const authCred = useAuth();
  const [role, setRole] = useState();
  const [accessKey, setAccessKey] = useState();
  const [cookieValue, setcookieValue] = useState(
    Cookies.get("cookiesAndCream")
  );

  useEffect(() => {
    if (cookieValue != null) {
      setRole(JSON.parse(cookieValue).role);
      setAccessKey(JSON.parse(cookieValue).accessKey);
    }
    console.log("tedsafst" + accessKey);
  }, []);

  return !accessKey ? (
    role === "role_student" ? (
      <Student accessKey={accessKey} />
    ) : (
      <Admin accessKey={accessKey} />
    )
  ) : (
    <Layout />
  );
};

export default AuthContent;
