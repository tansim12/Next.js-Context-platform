import axios from "axios";

export const globalInstance = axios.create({
    baseURL: process.env.VITE_LIVE_URL
})