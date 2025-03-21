import axios from "axios";

export const Url = "http://localhost:8080";
export const BaseUrl = "http://localhost:8080/deepanindia";
// export const Url = "http://192.168.0.125:8080";
// export const BaseUrl = "http://192.168.0.125:8080/deepanindia";

export const instance = axios.create({
  baseURL: BaseUrl,
});
