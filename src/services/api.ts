import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});
