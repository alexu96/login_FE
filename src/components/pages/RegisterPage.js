import React, { useState } from "react";
import { Register } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";

import "../../App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { sign_success } from "../../redux/types";

const clientId =
  "281780435214-flug5rmkg9b8e1pou9q4u30ptcrvobp6.apps.googleusercontent.com";

const SignUpPage = ({ Register }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const onSuccess = (credentials) => {
    dispatch({
      type: sign_success,
      payload: credentials,
    });
    history.push("/home");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("regss");
    Register({ email, password, history });
  };



  const [text, setText] = useState({
    email: "",
    password: "",
  });

  const { email, password } = text;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="text-center m-5-auto">
        <h2>Join us</h2>
        <h5>Create New User Account</h5>
        <form>
          <p>
            <label>Email address</label>
            <br />
            <input
              type="email"
              name="email"
              required
              onChange={(e) => {
                setText({
                  ...text,
                  email: e.target.value,
                });
              }}
            />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              required
              onChange={(e) => {
                setText({
                  ...text,
                  password: e.target.value,
                });
              }}
            />
          </p>
          <p>
            <button id="sub_btn" type="submit" onClick={handleRegister}>
              Register
            </button>
          </p>

          <GoogleLogin
            onClick={() => <Redirect to="./home" />}
            onSuccess={onSuccess}
            size="large"
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </form>
      </div>
    </GoogleOAuthProvider>
  );
};

export default connect(null, { Register })(SignUpPage);
