import axios from "axios";

const BASE_URL = "https://localhost:7223/api";

const axiosConfig = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosConfig;