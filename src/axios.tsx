import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2QzZDkwYmIyNDI4ZWNkY2MxZDViNjQiLCJlbWFpbCI6ImJlbm4yMjJAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjgzOTgyODY5LCJleHAiOjE2ODQyNDIwNjl9.zBVUlmMY5iXGx7_ilwmdED5rntMVysrSfwvBiaIjiis";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})

