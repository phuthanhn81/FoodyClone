import axios from "axios";
import axiosRetry from "axios-retry";

import {
  getUserCookie,
  setUserCookie,
  getAccessToken,
} from "../requests/place/requestUsers";

let _request = {};
let _data = {};

axiosRetry(axios, {
  retries: 1,
  retryDelay: (retryCount) => {
    return 5000;
  },
  retryCondition: async (error) => {
    let status = error.response.status;
    axios
      .request({
        method: "post",
        url: "http://192.168.102.3:5000/api/Login/RefreshToken",
        data: await getUserCookie(),
      })
      .then(async (response) => {
        const { data } = response;
        await setUserCookie(data);

        let retryRequest = {
          ..._request,
          headers: {
            Authorization: await getAccessToken(),
          },
        };

        status = data.status;
        if (status === 200) {
          _data = await APIRequest(retryRequest);
        }
      });

    return status !== 200;
  },
});

const APIRequest = (request) => {
  _request = request;
  return new Promise((resolve, reject) => {
    axios
      .request(_request)
      .then((response) => {
        resolve({
          data: response.data,
          status: response.status,
        });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.log("refreshToken");
          console.log(_data);
          resolve(_data);
        }
      });
  });
};

export { APIRequest };
