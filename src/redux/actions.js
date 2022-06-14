import { login_success, sign_success, log_out } from "./types";
import Axios from "axios";

export const Login =
  ({ email, password, history }) =>
  async (dispatch) => {
    console.log("runnn");

    try {
      const res = await Axios({
        method: "POST",
        data: {
          username: email,
          password: password,
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
      }).then((res) => {
        dispatch({
          type: login_success,
          payload: res.data,
        });
        history.push("/home");
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

export const Register =
  ({ email, password, history }) =>
  async (dispatch) => {
    console.log({ email, password });

    try {
      const res = await Axios({
        method: "POST",
        data: {
          username: email,
          password: password,
        },
        withCredentials: true,
        url: "http://localhost:4000/register",
      }).then((res) => {
        dispatch({
          type: sign_success,
          payload: res.data,
        });
        history.push("/home");
      });
    } catch (err) {
      console.log(err);
    }
  };

export const logout =
  ({ history }) =>
  async (dispatch) => {
    console.log("displat");

    dispatch({
      type: log_out,
    });
    history.push("/home");
  };
