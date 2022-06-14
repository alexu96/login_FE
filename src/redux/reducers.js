import { login_success, log_out, sign_success } from "./types";

const initialState = {
  isAuthentication: false,
  token: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case login_success:
      return {
        ...state,
        ...payload,
        isAuthentication: true,
        userId: payload.userId,
        token: payload,
      };
    case sign_success:
      return {
        ...state,
        ...payload,
        isAuthentication: true,
        token: payload,
      };

    case log_out:
      console.log(initialState);
      return {
        ...initialState,
        userId: null,
      };

    default:
      return {
        ...state,
      };
  }
}
