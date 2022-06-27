import axios from "axios";

export const requestMaker = (url, action, body) => {
  return axios[action](url, body ? body : null).then(({ data }) => data);
};
