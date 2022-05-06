import axios from "axios";

function requestGetPlaces(code) {
  return axios.request({
    method: "get",
    url: "http://192.168.102.3:5000/api/Data/PlacesByCode?code=" + code,
  });
}

function requestGetPlaceDishes(placeid) {
  return axios.request({
    method: "get",
    url:
      "http://192.168.102.3:5000/api/Data/PlaceDishesByPlaceID?placeid=" +
      placeid,
  });
}

function requestOrdersCart(order, orderDetail) {
  return axios.request({
    method: "post",
    url: "http://192.168.102.3:5000/api/Data/RequestOrders",
    data: {
      order,
      orderDetail,
    },
  });
}

export { requestGetPlaces, requestGetPlaceDishes, requestOrdersCart };
