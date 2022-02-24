import React from "react";
import { useState } from "react";

export default function RegisterForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setError] = useState({
    nameErr: "",
    emailErr: "",
    usernameErr: "",
    passwordErr: "",
    confirmpasswordErr: "",
  });

  const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const usernameRegx = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;
  const passwordRegx =
    /^(?=.*?[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[@$!%*?&]).{8,}$/;

  const registerData = (e) => {
    if (e.target.name === "name") {
      setUserData({
        ...userData,
        name: e.target.value,
      });

      setError({
        ...errors,
        nameErr:
          e.target.value.length === 0
            ? "this field ie required"
            : e.target.value.length < 3
            ? "Min length  is 3 char."
            : null,
      });
    } else if (e.target.name === "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });
      setError({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "email is required"
            : !emailRegx.test(e.target.value)
            ? "email is not invalid"
            : null,
      });
    } else if (e.target.name === "username") {
      setUserData({
        ...userData,
        username: e.target.value,
      });
      setError({
        ...errors,
        usernameErr:
          e.target.value.length === 0
            ? "this field ie required"
            : !usernameRegx.test(e.target.value)
            ? "username is invalid"
            : null,
      });
    } else if (e.target.name === "password") {
      setUserData({
        ...userData,
        password: e.target.value,
      });
      setError({
        ...errors,
        passwordErr:
          e.target.value.length === 0
            ? "this field ie required"
            : !passwordRegx.test(e.target.value)
            ? "password is invalid"
            : null,
      });
    } else if (e.target.name === "confirmpassword") {
      setUserData({
        ...userData,
        confirmpassword: e.target.value,
      });
      setError({
        ...errors,
        confirmpasswordErr:
          e.target.value !== userData.password
            ? "confirmpassword must match with password"
            : null,
      });
    }
  };

  return (
    <>
      <br />
      <form className="container">
        <h1>Register </h1>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name </label>
          <input
            type="text"
            className={`form-control ${errors.nameErr ? "border-danger" : ""}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            onChange={(e) => registerData(e)}
            value={userData.name}
          />
          <div className="text-danger">{errors.nameErr}</div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email </label>
          <input
            type="email"
            className={`form-control ${errors.emailErr ? "border-danger" : ""}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={(e) => registerData(e)}
            value={userData.email}
          />
          <div className="text-danger">{errors.emailErr}</div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">UserName </label>
          <input
            type="text"
            className={`form-control ${
              errors.usernameErr ? "border-danger" : ""
            }`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="username"
            onChange={(e) => registerData(e)}
            value={userData.username}
          />
          <div className="text-danger">{errors.usernameErr}</div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className={`form-control ${
              errors.passwordErr ? "border-danger" : ""
            }`}
            id="exampleInputPassword1"
            name="password"
            onChange={(e) => registerData(e)}
            value={userData.password}
          />
          <div className="text-danger">{errors.passwordErr}</div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${
              errors.confirmpasswordErr ? "border-danger" : ""
            }`}
            id="exampleInputPassword1"
            name="confirmpassword"
            onChange={(e) => registerData(e)}
            value={userData.confirmpassword}
          />
          <div className="text-danger">{errors.confirmpasswordErr}</div>
        </div>
        <br />
        <button
          type="submit"
          disabled={
            errors.emailErr ||
            errors.passwordErr ||
            errors.nameErr ||
            errors.usernameErr
          }
          className="btn btn-success"
        >
          Submit
        </button>
      </form>
    </>
  );
}
