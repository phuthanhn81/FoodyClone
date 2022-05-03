import { View, Text, FlatList, TouchableOpacity } from "react-native";

import React from "react";
import { useDispatch } from "react-redux";

import css from "../../css/home/css";

import queryCitiesReducer from "../../redux/ducks/queryCitiesSlice";
import queryReducer from "../../redux/ducks/querySlice";
import placesReducer from "../../redux/ducks/placesSlice";

export default function AutocompleteResult(props) {
  let last = props.queryCities.length;

  const dispatch = useDispatch();

  const cityPress = (city) => {
    dispatch(queryReducer.actions.setQuery({ text: city.name, onPress: true }));
    dispatch(queryCitiesReducer.actions.setQueryCities(""));
    dispatch(placesReducer.actions.getPlaces(city.code));
  };

  return (
    <View style={css.viewAutocompleteResult(last)}>
      <FlatList
        data={props.queryCities}
        keyExtractor={(item) => item.code}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => cityPress({ code: item.code, name: item.name })}
          >
            <View style={css.viewSearchResult({ index, last })}>
              <Text style={css.textSearchResult()}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
