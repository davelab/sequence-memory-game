import axios from "axios";
import { API_URL, ENDPOINTS } from "./config";

const { pokemon } = ENDPOINTS;

const instance = axios.create({
  baseURL: API_URL
});

export const getPokemons = async (limit = 9) => {
  try {
    const resp = await instance.get(`${pokemon}?limit=${limit}`);
    return resp.data.results;
  } catch (error) {
    return Promise.reject(`${error.name}: ${error.message}`);
  }
};
