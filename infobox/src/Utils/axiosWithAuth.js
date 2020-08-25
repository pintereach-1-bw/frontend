import axios from "axios";


export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://pintereach10.herokuapp.com/",
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token"))
    }
  });
};