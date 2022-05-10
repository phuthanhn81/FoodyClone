import { call, put, select } from "redux-saga/effects";

import {
  requestGetPlaces,
  requestGetPlaceDishes,
  requestOrdersCart,
} from "../../requests/place/requestGetPlaces";

import placesReducer from "../../../ducks/placesSlice";
import placeDishesReducer from "../../../ducks/placeDishesSlice";
import cartReducer from "../../../ducks/cartSlice";
import resultReducer from "../../../ducks/resultSlice";
import displayReducer from "../../../ducks/displaySlice";

function* handleGetPlaces(action) {
  try {
    const response = yield call(requestGetPlaces, action.payload);
    const { data } = response;

    yield put(placesReducer.actions.setPlaces(data));
  } catch (error) {
    console.log(error);
  }
}

function* handleGetPlaceDishes(action) {
  try {
    const response = yield call(requestGetPlaceDishes, action.payload);
    const { data } = response;

    yield put(placeDishesReducer.actions.setPlaceDishes(data));
  } catch (error) {
    console.log("handleGetPlaceDishes");
  }
}

function* handleAddCart(action) {
  try {
    let cart = yield select((state) => state.cart);
    let data = {};

    if (cart.dishes.length === 0) {
      data = {
        total: action.payload.price,
        dishes: [
          {
            dishid: action.payload.id,
            dishname: action.payload.name,
            dishprice: action.payload.price,
            image: action.payload.photoDish,
            quantity: 1,
          },
        ],
      };
    } else {
      let total = cart.total + action.payload.price;
      let dishes = cart.dishes.map((dish) =>
        dish.dishid === action.payload.id
          ? { ...dish, quantity: dish.quantity + 1 }
          : dish
      );

      let Exists = cart.dishes.find(
        (dish) => dish.dishid === action.payload.id
      );
      if (!Exists) {
        dishes = [
          ...dishes,
          {
            dishid: action.payload.id,
            dishname: action.payload.name,
            dishprice: action.payload.price,
            image: action.payload.photoDish,
            quantity: 1,
          },
        ];
      }

      data = {
        total: total,
        dishes: dishes,
      };
    }

    yield put(cartReducer.actions.setCart(data));
  } catch (error) {
    console.log("handleAddCart");
  }
}

function* handleRemoveCart(action) {
  try {
    let cart = yield select((state) => state.cart);

    let total = cart.total - action.payload.price;
    let dishes = [];

    let dish = cart.dishes.find((dish) => dish.dishid === action.payload.id);
    if (dish.quantity === 1) {
      dishes = cart.dishes.filter((n) => n.dishid !== dish.dishid);
    } else {
      dishes = cart.dishes.map((dish) =>
        dish.dishid === action.payload.id
          ? { ...dish, quantity: dish.quantity - 1 }
          : dish
      );
    }

    let data = {
      total: total,
      dishes: dishes,
    };

    yield put(cartReducer.actions.setCart(data));
  } catch (error) {
    console.log("handleRemoveCart");
  }
}

function* handleOrdersCart(action) {
  // yield(): Có nghĩa là chạy tuần tự khi nào trả ra kết quả mới thực thi tiếp
  try {
    let cart = yield select((state) => state.cart);
    yield put(displayReducer.actions.setDisplay(cart.dishes));

    let order = {
      Account: -1,
    };

    let orderDetail = cart.dishes.map((dish) => {
      let obj = {
        DishID: dish.dishid,
        Name: dish.dishname,
        Quantity: dish.quantity,
        Total: dish.quantity * dish.dishprice,
      };
      return obj;
    });

    const response = yield call(requestOrdersCart, order, orderDetail);
    const { status } = response;
    yield put(resultReducer.actions.setResult(status));
  } catch (error) {
    console.log("handleOrdersCart");
  }
}

export {
  handleGetPlaces,
  handleGetPlaceDishes,
  handleAddCart,
  handleRemoveCart,
  handleOrdersCart,
};
