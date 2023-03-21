import config from "@/request/config";
import axios from "axios";

const request = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
});

export default request;
