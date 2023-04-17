import api from "../services/api";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await api.post("/login", { username, password });
    const token = response.data.token;
    localStorage.setItem("token", token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data.message,
    });
  }
};
