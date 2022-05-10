import { APIRequest } from "../APIRequestBase";
import { getAccessToken } from "../place/requestUsers";

async function requestGetPlaces(code) {
  let request = {
    method: "get",
    url: "http://192.168.102.3:5000/api/Data/PlacesByCode?code=" + code,
    headers: {
      Authorization: await getAccessToken(),
    },
  };

  return await APIRequest(request);
}

async function requestGetPlaceDishes(placeid) {
  let request = {
    method: "get",
    url:
      "http://192.168.102.3:5000/api/Data/PlaceDishesByPlaceID?placeid=" +
      placeid,
    headers: {
      Authorization: await getAccessToken(),
    },
  };

  return await APIRequest(request);
}

async function requestOrdersCart(order, orderDetail) {
  let request = {
    method: "post",
    url: "http://192.168.102.3:5000/api/Data/RequestOrders",
    data: {
      order,
      orderDetail,
    },
    headers: {
      Authorization: await getAccessToken(),
    },
  };

  return await APIRequest(request);
}

export { requestGetPlaces, requestGetPlaceDishes, requestOrdersCart };
