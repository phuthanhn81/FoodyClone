import axios from "axios";

import * as SecureStore from "expo-secure-store";

async function setUserCookie(data) {
  if (data.status === 200) {
    await SecureStore.setItemAsync("accessToken", data.accessToken);
    await SecureStore.setItemAsync("refreshToken", data.refreshToken);
    await SecureStore.setItemAsync("status", data.status.toString());
  }

  if (data.status === 404 || data.status === 400 || data.status === 500) {
    await SecureStore.setItemAsync("accessToken", "null");
    await SecureStore.setItemAsync("refreshToken", "null");
    await SecureStore.setItemAsync("status", data.status.toString());
  }
}

async function getUserCookie() {
  return {
    AccessToken: await SecureStore.getItemAsync("accessToken"),
    RefreshToken: await SecureStore.getItemAsync("refreshToken"),
    Status: parseInt(await SecureStore.getItemAsync("status")),
  };
}

async function getAccessToken() {
  return "Bearer " + (await SecureStore.getItemAsync("accessToken"));
}

function requestAuthenticate(request) {
  return axios
    .request({
      method: "post",
      url: "http://192.168.102.3:5000/api/Login/Authenticate",
      data: {
        UserName: request.UserName,
        Password: request.Password,
      },
    })
    .then(async (response) => {
      const { data } = response;
      await setUserCookie(data);
    });
}

function requestSignUp(request) {
  return axios.request({
    method: "post",
    url: "http://192.168.102.3:5000/api/Login/SignUp",
    data: request.requestData,
  });
}

export {
  requestAuthenticate,
  setUserCookie,
  getUserCookie,
  getAccessToken,
  requestSignUp,
};
