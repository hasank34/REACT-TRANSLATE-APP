import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "eed126f9bcmshc5525da323f2af8p1ab61fjsn34753381407b",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
export default api;
