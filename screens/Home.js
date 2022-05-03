import { View, StatusBar, ScrollView } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import common from "../css/common";

import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItems";

import citiesReducer from "../redux/ducks/citiesSlice";
import AutocompleteResult from "../components/home/AutocompleteResult";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(citiesReducer.actions.getCities());
  }, [dispatch]);

  const places = useSelector((state) => state.places);
  const cities = useSelector((state) => state.cities);
  const queryCities = useSelector((state) => state.queryCities);

  return (
    <View style={common.AndroidSafeArea(StatusBar.currentHeight)}>
      <View style={common.ContainerHeader()}>
        <HeaderTabs />
      </View>
      <SearchBar cities={cities} />
      <AutocompleteResult queryCities={queryCities} />
      <Categories />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItems places={places} />
      </ScrollView>
    </View>
  );
}
