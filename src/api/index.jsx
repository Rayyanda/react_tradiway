import axios from "axios";

const Api = axios.create({
    baseURL: "http://tradiway.test/api",
    withCredentials:true,
});

export default Api;
