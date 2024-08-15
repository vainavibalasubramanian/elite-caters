import axios from 'axios';

const API_URL = 'http://localhost:8080/customOrders';

export const getAllCustomOrders = () => {
  return axios.get(API_URL);
};

export const getBreakfastOptions = () => {
  return axios.get(`${API_URL}/breakfast`);
};

export const getLunchOptions = () => {
  return axios.get(`${API_URL}/lunch`);
};

export const getDinnerOptions = () => {
  return axios.get(`${API_URL}/dinner`);
};

export const getBreakfastDetails = () => {
  return axios.get(`${API_URL}/breakfastDetails`);
};
export const getLunchDetails = () => {
  return axios.get(`${API_URL}/lunchDetails`);
};
export const getDinnerDetails = () => {
  return axios.get(`${API_URL}/dinnerDetails`);
};
