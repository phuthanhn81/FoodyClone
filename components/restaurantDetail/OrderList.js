import { View, Text, Image } from "react-native";

import React from "react";
import css from "../../css/restaurantDetail/css";

export default function OrderList(props) {
  return (
    <View style={{ paddingHorizontal: 30 }}>
      {props.dishes.map((dish, index) => (
        <View style={css.viewOrderItem()} key={index}>
          <View style={{ width: "70%", justifyContent: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {dish.dishname}
            </Text>
          </View>
          <View style={{ width: "30%", height: 100 }}>
            <Image
              source={{ uri: dish.image }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 8,
              }}
            />
          </View>
        </View>
      ))}
    </View>
  );
}
