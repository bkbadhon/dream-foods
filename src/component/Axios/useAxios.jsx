import React from 'react';
import axios from "axios";
export const AxiosSource = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
  });
  const useAxios = () => {
    return AxiosSource;
  };

export default useAxios;