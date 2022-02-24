import React from "react";
import { useState , useContext} from "react";
import { LanguageContext } from "../Context/languageContext";

export default function LoginForm() {

  // const {contextLanguage, setContextLanguage} = useContext(LanguageContext)



  const [userEmail, setEmail] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });
  const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const loginData = (e) => {
    if (e.target.name === "email") {
      setEmail({
        ...userEmail,
        email: e.target.value,
      });

      setError({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "email is required"
            : !emailRegx.test(e.target.value)
            ? "email is not invalid "
            : null,
      });
    } else if (e.target.name === "password") {
      setEmail({
        ...userEmail,
        password: e.target.value,
      });

      setError({
        ...errors,
        passwordErr:
          e.target.value.length === 0
            ? "password is required"
            : e.target.value.length < 8
            ? "Min length is 8 char"
            : null,
      });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
  };

  return (
    <>
     {/* <h1 className="text-warning"> CONTEXT DATA: {contextLanguage}   </h1>

<button className="btn btn-warning" onClick={() => setContextLanguage("ar")}> CONTEXT CHANGE </button>
 */}


      <form onSubmit={(e) => submitData(e)} className="container py-5">
        <h1>Login </h1>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.emailErr ? "border-danger" : ""}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={(e) => loginData(e)}
            value={userEmail.email}
          />
          <div className="text-danger">{errors.emailErr}</div>
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
            onChange={(e) => loginData(e)}
            value={userEmail.password}
          />
          <div className="text-danger">{errors.passwordErr}</div>
        </div>
        <br />

        <button
          type="submit"
          disabled={errors.emailErr || errors.passwordErr}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </>
  );
}
