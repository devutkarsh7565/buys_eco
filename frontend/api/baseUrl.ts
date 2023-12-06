import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/";

export const APIInstance = axios.create({
  baseURL: `${API_URL}`,
});
