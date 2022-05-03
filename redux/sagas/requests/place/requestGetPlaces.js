import axios from "axios";

export function requestGetPlaces(code) {
  return axios.request({
    method: "get",
    url: "http://192.168.102.3:5000/api/Data/PlacesByCode?code=" + code,
  });
}
