import axios from "axios";

export const gijol = axios.create({
  baseURL: process.env.NEXT_GIJOL_PROD_SERVER,
});
