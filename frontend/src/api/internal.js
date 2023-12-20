import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_INTERNAL_API_PATH,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitUser = async (data) => {
  let response;

  try {
    response = await api.post("/createuser", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const getAllUsers = async () => {
  let response;

  try {
    response = await api.get("/user/all");
  } catch (error) {}

  return response;
};

export const deleteUser = async (id) => {
  let response;
  try {
    response = await api.delete(`/user/${id}`);
  } catch (error) {
    return error;
  }

  return response;
};

