import axios from "axios";

export const Client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

Client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    throw error.response.data;
  }
);

export default Client;
