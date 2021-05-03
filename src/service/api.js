import axios from "axios";

const api = axios.create({
  baseURL: "https://coronavirus-19-api.herokuapp.com/countries",
  header: { mode: "cors", cache: "default" },
});

export default api;