import axios from "axios";

export const Url = process.env.REACT_APP_API_URL;
export const BaseUrl = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL: BaseUrl,
});