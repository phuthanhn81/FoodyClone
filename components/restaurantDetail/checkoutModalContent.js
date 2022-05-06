import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import NumberFormat from "react-number-format";
import Icon from "react-native-vector-icons/FontAwesome";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "../../css/restaurantDetail/css";

import cartReducer from "../../redux/ducks/cartSlice";
import loadingReducer from "../../redux/ducks/loadingSlice";

export default function checkoutModalContent({ navigation, ...props }) {
  const dispatch = useDispatch();

  const ordersCart = () => {
    dispatch(cartReducer.actions.ordersCart());
    dispatch(loadingReducer.actions.setLoading(true));
    props.setModalVisible(false);

    setTimeout(() => {
      navigation.navigate("OrderCompleted", {
        restaurantName: props.restaurantName,
      });
    }, 2000);
  };

  const cart = useSelector((state) => state.cart);

  return (
    <View style={css.modalContainer()}>
      <View style={css.modalCheckoutContainer()}>
        <Text style={css.restaurantName()}>{props.restaurantName}</Text>

        <View style={css.textDishDetailHeader()}>
          <View style={{ width: "55%" }}>
            <Text style={css.textDishName()}>Tên món</Text>
          </View>
          <View
            style={{
              width: "15%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>SL</Text>
          </View>
          <View
            style={{
              width: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Tổng</Text>
          </View>
        </View>

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {cart.dishes.map((dish, index) => (
            <View style={css.viewDishDetail()} key={index}>
              <View style={{ width: "55%", justifyContent: "center" }}>
                <Text style={css.textDishName()}>{dish.dishname}</Text>
              </View>
              <View
                style={{
                  width: "15%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{dish.quantity}</Text>
              </View>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NumberFormat
                  value={dish.quantity * dish.dishprice}
                  displayType="text"
                  thousandSeparator
                  renderText={(value) => <Text>{value}</Text>}
                />
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={css.viewTotal()}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Thành tiền</Text>
          <NumberFormat
            value={cart.total}
            displayType="text"
            thousandSeparator
            renderText={(value) => (
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>{value}đ</Text>
            )}
          />
        </View>

        <View style={{ justifyContent: "flex-end", marginTop: 10 }}>
          <View style={css.checkoutCartButton()}>
            <View style={{ width: "50%" }}>
              <TouchableOpacity onPress={() => props.setModalVisible(false)}>
                <Icon
                  name="shopping-cart"
                  size={25}
                  color="white"
                  style={{ alignSelf: "center" }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: "50%" }}>
              <TouchableOpacity onPress={() => ordersCart()}>
                <Icon
                  name="money"
                  size={25}
                  color="white"
                  style={{ alignSelf: "center" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
