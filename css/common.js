import { StyleSheet } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: (Height) => {
    return {
      flex: 1,
      backgroundColor: "#eee",
      paddingTop: Height,
      height: "100%",
    };
  },

  ContainerHeader: () => {
    return {
      backgroundColor: "#fff",
      padding: 15,
    };
  },
});
