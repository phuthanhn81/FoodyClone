import {
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Divider } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";
import { React, useEffect } from "react";

import common from "../css/common";

import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItems";
import BottomTabs from "../components/home/BottomTabs";

import citiesReducer from "../redux/ducks/citiesSlice";
import AutocompleteResult from "../components/home/AutocompleteResult";

// const navigation -> props đăng kí của Navigation
export default function Home({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(citiesReducer.actions.getCities());
  }, [dispatch]);

  const places = useSelector((state) => state.places);
  const cities = useSelector((state) => state.cities);
  const queryCities = useSelector((state) => state.queryCities);

  return (
    <KeyboardAvoidingView
      style={common.AndroidSafeArea(StatusBar.currentHeight)}
      behavior={"height"}
      enabled={false}
    >
      <View style={common.ContainerHeader()}>
        <HeaderTabs />
      </View>
      <SearchBar cities={cities} />
      <AutocompleteResult queryCities={queryCities} />
      <Categories />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItems places={places} navigation={navigation} />
      </ScrollView>
      <Divider style={{ borderWidth: 1 }} />
      <BottomTabs />
    </KeyboardAvoidingView>
  );
}
