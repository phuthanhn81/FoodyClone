import { call, put } from "redux-saga/effects";

import * as NavigationService from "../../../../NavigationService";

import {
  requestAuthenticate,
  getUserCookie,
  requestSignUp,
} from "../../requests/place/requestUsers";

import usersReducer from "../../../ducks/usersSlice";
import reportReducer from "../../../ducks/reportSlice";

function* handleAuthenticate(action) {
  try {
    yield call(requestAuthenticate, action.payload);
    let cookie = yield call(getUserCookie);

    // con trỏ
    let obj = {
      statusLogin: cookie.Status,
    };

    yield put(usersReducer.actions.setUser(obj));
  } catch (error) {
    console.log("handleAuthenticate");
  }
}

function* handleSignUp(action) {
  try {
    const response = yield call(requestSignUp, action.payload);
    const { data } = response;

    if (data === 0) {
      yield put(
        reportReducer.actions.setReport({
          screen: "SignUp",
          text: "Email đã tồn tại",
          report: true,
        })
      );
    }
    if (data === 1) {
      yield put(
        reportReducer.actions.setReport({
          screen: "SignUp",
          text: "Tên đăng nhập đã tồn tại",
          report: true,
        })
      );
    }
    if (data === 200) {
      yield put(
        reportReducer.actions.setReport({
          screen: "SignUp",
          text: "Đăng kí thành công",
          report: false,
        })
      );
      yield NavigationService.navigate("Login");
    }
  } catch (error) {
    console.log("handleSignUp");
  }
}

export { handleAuthenticate, handleSignUp };
