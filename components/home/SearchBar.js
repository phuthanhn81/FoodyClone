import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "../../css/home/css";

import queryCitiesReducer from "../../redux/ducks/queryCitiesSlice";
import queryReducer from "../../redux/ducks/querySlice";

export default function SearchBar() {
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.text !== "") {
      dispatch(queryCitiesReducer.actions.setQueryCities(query));
    }
  }, [query.text]);

  const queryChange = (text) => {
    if (text === "") {
      dispatch(queryCitiesReducer.actions.setQueryCities(""));
    }
    dispatch(queryReducer.actions.setQuery({ text: text, onPress: false }));
  };

  return (
    <View style={css.containerSearchBar()}>
      <Searchbar
        style={css.searchInput()}
        placeholder="Search"
        onChangeText={(text) => queryChange(text)}
        value={query.text}
      />
    </View>
  );
}
