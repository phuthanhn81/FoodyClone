import { View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import common from "../css/common";

import placeDishesReducer from "../redux/ducks/placeDishesSlice";

import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

// const route
export default function RestaurantDetail({ route, navigation }) {
  const [showViewCart, setShowViewCart] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placeDishesReducer.actions.getPlaceDishes(route.params.placeid));
  }, [dispatch]);

  const placeDishes = useSelector((state) => state.placeDishes);

  return (
    <View style={common.AndroidSafeArea(0)}>
      <About route={route} />
      <Divider width={1.8} style={{ marginTop: 10 }} />
      <MenuItems placeDishes={placeDishes} setShowViewCart={setShowViewCart} />
      {showViewCart && <ViewCart route={route} navigation={navigation} />}
    </View>
  );
}
