import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import React from "react";

import css from "../../css/home/css";

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.places.map((place, index) => (
        <TouchableOpacity
          key={place.id}
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              placeid: place.id,
              name: place.name,
              photoUrl: place.photoUrl,
              phone: place.phone,
              rating: place.rating,
              review: place.review,
            })
          }
        >
          <View style={css.viewPlaces()}>
            <RestaurantImage image={place.photoUrl} />
            <RestaurantInfo
              name={place.name}
              rating={place.rating}
              address={place.address}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 165 }}
      />
      <TouchableOpacity style={css.likeHeart()}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="red" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View style={css.viewPlaceInfo()}>
      <View style={{ width: "85%" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 11 }}>{props.address}</Text>
      </View>
      <View style={css.viewRating()}>
        <Text>{props.rating}</Text>
        <MaterialCommunityIcons name="star" size={20} color="black" />
      </View>
    </View>
  );
};
