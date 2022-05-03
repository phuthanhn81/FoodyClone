import axios from "axios";

export function requestGetCities() {
  return axios.request({
    method: "get",
    url: "https://provinces.open-api.vn/api/",
  });
}
