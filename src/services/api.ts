import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-bb.herokuapp.com/",
});

export default api;
