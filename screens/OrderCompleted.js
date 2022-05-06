import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LottieView from "lottie-react-native";
import { View, Text, ScrollView, StatusBar } from "react-native";

import common from "../css/common";

import OrderList from "../components/restaurantDetail/OrderList";

import cartReducer from "../redux/ducks/cartSlice";
import loadingReducer from "../redux/ducks/loadingSlice";

// state LUÔN LUÔN là con trỏ
// useSelector state ở Component nào if có set lại state đó thì sẽ re-render Component đó
export default function OrderCompleted({ route }) {
  const display = useSelector((state) => state.display);
  const result = useSelector((state) => state.result);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadingReducer.actions.setLoading(false));
    dispatch(
      cartReducer.actions.setCart({
        total: 0,
        dishes: [],
      })
    );
  }, []);

  const OrderSuccess = () => {
    return (
      <View
        style={[
          common.AndroidSafeArea(StatusBar.currentHeight),
          common.viewOrderCompleted(),
        ]}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center" }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Bạn đã đặt món ăn thành công tại cửa hàng{" "}
            {route.params.restaurantName}
          </Text>
        </View>

        <ScrollView>
          <OrderList dishes={display} />
        </ScrollView>

        <LottieView
          style={{ height: 150, alignSelf: "center", marginBottom: 10 }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </View>
    );
  };

  if (result === 200) {
    return <OrderSuccess />;
  }
  return <></>;
}
