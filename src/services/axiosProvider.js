import axios from "axios";

export const API = axios.create({
    baseURL: "https://crudcrud.com/api/9b4a8d3286914e2ab8c9bbc9757d594e",
    timeout: 1000
});