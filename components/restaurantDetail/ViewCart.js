import React, { useState } from "react";
import { useSelector } from "react-redux";

import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import LottieView from "lottie-react-native";

import NumberFormat from "react-number-format";

import css from "../../css/home/css";
import cssRD from "../../css/restaurantDetail/css";

import CheckoutModalContent from "./checkoutModalContent";

export default function ViewCart({ navigation, ...props }) {
  const [modalVisible, setModalVisible] = useState(false);

  const cart = useSelector((state) => state.cart);
  const loading = useSelector((state) => state.loading);

  const checkOut = () => {
    if (cart.dishes.length > 0) {
      setModalVisible(true);
    }
  };

  const Loading = () => {
    return (
      <View style={cssRD.viewLoading()}>
        <LottieView
          style={{ height: 200 }}
          source={require("../../assets/animations/scanner.json")}
          autoPlay
          speed={3}
        />
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <CheckoutModalContent
          restaurantName={props.route.params.name}
          setModalVisible={setModalVisible}
          navigation={navigation}
        />
      </Modal>
      <View style={css.viewCart()}>
        <View style={css.viewCartBtn()}>
          <TouchableOpacity
            style={css.CartButton()}
            activeOpacity={0.8}
            onPress={() => checkOut()}
          >
            <View style={{ width: "50%" }}>
              <Icon
                name="eye"
                size={25}
                color="white"
                style={{ alignSelf: "center" }}
              />
            </View>
            <View style={{ width: "50%" }}>
              <NumberFormat
                value={cart.total}
                displayType="text"
                thousandSeparator
                renderText={(value) => (
                  <Text style={css.CartText()}>{value}đ</Text>
                )}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
}
