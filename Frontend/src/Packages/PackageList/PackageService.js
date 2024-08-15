import axios from 'axios';

export const getAllPackages = () => {
  return axios.get('http://localhost:8080/packages');
};