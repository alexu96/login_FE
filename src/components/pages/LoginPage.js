import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Login } from "../../redux/actions";
import { connect, useSelector,useDispatch } from "react-redux";

import "../../App.css";

import { useHistory } from "react-router-dom";
import { GoogleOAuthProvider,GoogleLogin } from "@react-oauth/google";
import { Redirect } from "react-router-dom";
import { sign_success } from "../../redux/types";

const clientId =
  "281780435214-flug5rmkg9b8e1pou9q4u30ptcrvobp6.apps.googleusercontent.com";

const SignInPage = ({ Login }) => {

  const value = useSelector((state) => state.user.isAuthentication);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = (credentials) => {
    dispatch({
      type: sign_success,
      payload: credentials,
    });
    history.push("/home");
  };


  const [text, setText] = useState({
    email: "",
    password: "",
  });

  const { email, password } = text;

  useEffect(() => {
    if (value) {
    }
  }, [value]);

  return (
    <GoogleOAuthProvider clientId={clientId}>
    <div className="text-center m-5-auto d-flex flex-column justify-content-center align-items-center">
      <h2>Login</h2>
      <div className="form-wrap">
        <p>
          <label>email</label>
          <br />
          <input
            type="text"
            name="first_name"
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
          <button
            id="sub_btn"
            type="submit"
            onClick={() => {
              Login({ email, password, history });
            }}
          >
            Login
          </button>
        </p>
        <div>
        <GoogleLogin
            onClick={() => <Redirect to="./home" />}
            onSuccess={onSuccess}
            size="large"
            onError={() => {
              console.log("Login Failed");
            }}
          /></div>
      </div>

      <footer>
        <p>
          Dont have an account? <Link to="/register">Create an account</Link>.
        </p>
      </footer>
    </div> </GoogleOAuthProvider>
  );
};

export default connect(null, { Login })(SignInPage);
