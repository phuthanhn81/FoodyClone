import { StyleSheet } from "react-native";

export default StyleSheet.create({
  viewHeaderTabs: () => {
    return {
      flexDirection: "row",
      alignSelf: "center",
    };
  },

  headerButton: (props) => {
    return {
      backgroundColor: props.text === props.isActive ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    };
  },

  headerBtnText: (props) => {
    return {
      color: props.text === props.isActive ? "white" : "black",
      fontSize: 15,
      fontWeight: "900",
    };
  },

  containerSearchBar: () => {
    return {
      backgroundColor: "white",
      marginBottom: 5,
    };
  },

  searchInput: () => {
    return {
      width: "95%",
      alignSelf: "center",
      backgroundColor: "#eee",
      marginBottom: 10,
    };
  },

  viewAutocompleteResult: (length) => {
    return {
      position: "absolute",
      zIndex: length === 0 ? 0 : 1,
      top: 150,
      left: 0,
      right: 0,
      bottom: 0,
      height: "50%",
      width: "100%",
      paddingHorizontal: 7,
      borderRadius: 50,
    };
  },

  viewSearchResult: (props) => {
    return {
      borderTopLeftRadius: props.index === 0 ? 5 : 0,
      borderTopRightRadius: props.index === 0 ? 5 : 0,
      borderBottomLeftRadius: props.index === props.last - 1 ? 5 : 0,
      borderBottomRightRadius: props.index === props.last - 1 ? 5 : 0,
      backgroundColor: "white",
    };
  },

  textSearchResult: () => {
    return {
      fontSize: 15,
      fontWeight: "bold",
      paddingLeft: 10,
      paddingVertical: 5,
    };
  },

  viewCategories: () => {
    return {
      backgroundColor: "#fff",
      paddingTop: 8,
      paddingBottom: 5,
      paddingLeft: 20,
    };
  },

  imageCategories: () => {
    return {
      width: 50,
      height: 40,
      resizeMode: "contain",
    };
  },

  likeHeart: () => {
    return {
      position: "absolute",
      right: 20,
      top: 20,
    };
  },

  viewPlaceInfo: () => {
    return {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
    };
  },

  viewRating: () => {
    return {
      width: "15%",
      flexDirection: "row",
      backgroundColor: "#eee",
      height: 30,
      alignItems: "center",
      borderRadius: 15,
      justifyContent: "center",
    };
  },

  viewPlaces: () => {
    return {
      marginTop: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: "white",
    };
  },

  viewBottomTabs: () => {
    return {
      flexDirection: "row",
      margin: 10,
      justifyContent: "space-between",
    };
  },

  viewDishes: () => {
    return {
      flexDirection: "row",
      paddingHorizontal: 5,
      alignItems: "center",
      borderBottomWidth: 1.8,
      borderColor: "#dcdcdc",
      paddingVertical: 10,
    };
  },

  viewCart: () => {
    return {
      flexDirection: "row",
      position: "absolute",
      bottom: 10,
      zIndex: 1,
    };
  },

  viewCartBtn: () => {
    return {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
    };
  },

  CartButton: () => {
    return {
      flexDirection: "row",
      backgroundColor: "black",
      padding: 10,
      borderRadius: 30,
      width: 300,
    };
  },

  CartText: () => {
    return {
      color: "white",
      fontSize: 15,
      alignSelf: "center",
    };
  },
});
