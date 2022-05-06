import { View, Text, TouchableOpacity } from "react-native";

import { useState } from "react";
import React from "react";

import css from "../../css/home/css";

export default function HeaderTabs() {
  const [active, setActive] = useState("Delivery");

  return (
    <View style={[css.viewHeaderTabs()]}>
      <HeaderButton text="Delivery" isActive={active} setActive={setActive} />
      <HeaderButton text="Pickup" isActive={active} setActive={setActive} />
    </View>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={css.headerButton(props)}
      onPress={() => props.setActive(props.text)}
    >
      <Text style={css.headerBtnText(props)}>{props.text}</Text>
    </TouchableOpacity>
  );
};
