import React from "react";

import { View, Text, Image, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function About(props) {
  const { name, photoUrl, phone, rating, review } = props.route.params;

  const description = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            paddingHorizontal: 10,
          }}
        >
          <Text>SĐT : {phone} • </Text>
          <Text>{rating}</Text>
          <MaterialCommunityIcons name="star" size={20} color="black" />
          <Text> • </Text>
          <Text>{review}</Text>
          <MaterialCommunityIcons name="comment" size={20} color="black" />
        </View>
      </ScrollView>
    );
  };

  return (
    <View>
      <RestaurantImage image={photoUrl} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 150 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 18,
      fontWeight: "700",
      marginTop: 5,
      marginHorizontal: 10,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => {
  return props.description();
};
