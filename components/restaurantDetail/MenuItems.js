import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import React from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";

import cartReducer from "../../redux/ducks/cartSlice";

import css from "../../css/home/css";

export default function MenuItems(props) {
  const dispatch = useDispatch();

  const addCart = (dish) => {
    dispatch(cartReducer.actions.addCart(dish));
  };

  const cart = useSelector((state) => state.cart);

  const Exists = (dishid) => {
    if (cart.dishes.length === 0) return false;
    else {
      if (cart.dishes.find((n) => n.dishid === dishid)) {
        return true;
      } else {
        return false;
      }
    }
  };
  const Total = (dishid) => {
    let dish = cart.dishes.find((n) => n.dishid === dishid);
    return (
      <Text style={{ fontWeight: "bold", fontSize: 12 }}>
        {" "}
        ({dish.quantity})
      </Text>
    );
  };

  const removeCard = (dish) => {
    dispatch(cartReducer.actions.removeCart(dish));
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          props.setShowViewCart(false);
        } else {
          props.setShowViewCart(true);
        }
      }}
      scrollEventThrottle={400}
    >
      {props.placeDishes.map((dish, index) => (
        <View key={dish.id} style={css.viewDishes()}>
          <View style={{ width: "10%", paddingHorizontal: 3 }}>
            <TouchableOpacity onPress={() => addCart(dish)} activeOpacity={0.5}>
              <Icon name="shopping-cart" size={25} color="green" />
            </TouchableOpacity>
          </View>
          <View style={{ width: "65%", paddingHorizontal: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {dish.name}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <NumberFormat
                value={dish.price}
                displayType="text"
                thousandSeparator
                renderText={(value) => <Text>{value}đ</Text>}
              />
              {Exists(dish.id) && (
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={{ marginLeft: 5 }}
                    onPress={() => removeCard(dish)}
                  >
                    <Icon name="shopping-cart" size={20} color="red" />
                  </TouchableOpacity>
                  {Total(dish.id)}
                </View>
              )}
            </View>
          </View>
          <View style={{ width: "25%", height: 100 }}>
            <Image
              source={{ uri: dish.photoDish }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 8,
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
