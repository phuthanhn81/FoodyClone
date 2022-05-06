import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: () => {
    return {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    };
  },

  modalCheckoutContainer: () => {
    return {
      backgroundColor: "white",
      height: "70%",
      padding: 15,
    };
  },

  restaurantName: () => {
    return {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 10,
    };
  },

  checkoutCartButton: () => {
    return {
      flexDirection: "row",
      backgroundColor: "black",
      padding: 10,
      borderRadius: 30,
      width: "100%",
    };
  },

  viewTotal: () => {
    return {
      marginTop: 10,
      height: 30,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    };
  },

  viewDishDetail: () => {
    return {
      width: "100%",
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 20,
      marginBottom: 10,
      borderBottomWidth: 1.8,
      borderColor: "#dcdcdc",
    };
  },

  textDishDetailHeader: () => {
    return {
      width: "100%",
      flexDirection: "row",
      paddingHorizontal: 10,
      borderBottomWidth: 1.8,
      borderColor: "#dcdcdc",
      paddingBottom: 10,
    };
  },

  textDishName: () => {
    return {
      fontSize: 14,
      fontWeight: "bold",
    };
  },

  viewOrderItem: () => {
    return {
      width: "100%",
      flexDirection: "row",
      paddingVertical: 10,
      borderBottomWidth: 1.8,
      borderColor: "#dcdcdc",
    };
  },

  viewLoading: () => {
    return {
      backgroundColor: "black",
      position: "absolute",
      opacity: 0.5,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    };
  },
});
