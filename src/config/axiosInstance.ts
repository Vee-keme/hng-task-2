import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://timbu-get-all-products.reavdev.workers.dev/",
  timeout: 50000,
  headers: {
    Accept: "application/json",

    "Content-Type": "application/json",
  },
});
