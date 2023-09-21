import axios from "axios";

export const clerk = axios.create({
  baseURL: process.env.NEXT_CLERK_PROD_SERVER,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_CLERK_PROD_SECRET_KEY}`,
  },
});
