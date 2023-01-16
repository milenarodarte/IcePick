import axios from "axios";

export const API = axios.create(
    {
        baseURL: "https://kenzie-icebreaker-api.onrender.com/",
        timeout: 10000
    }
)

