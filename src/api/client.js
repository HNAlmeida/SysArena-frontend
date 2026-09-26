import axios from "axios";
import { apiBaseUrl } from "../config/environment";

export const api = axios.create({
  baseURL: apiBaseUrl,
});
