import { View, Text, Image, ScrollView } from "react-native";

import React from "react";

import css from "../../css/home/css";

import { images } from "../../data/images";

export default function Categories() {
  return (
    <View style={css.viewCategories()}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image source={item.image} style={css.imageCategories()} />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
