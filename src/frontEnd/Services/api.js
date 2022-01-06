import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/app",
})

export default api;