const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    width: "100%",
    height: "100%",
  },

  loginFormView: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },

  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    width: 333,
  },

  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    alignItems: "center",
    width: 333,
  },

  textSignup: {
    fontSize: 16,
    opacity: 0.2,
    fontWeight: "bold",
    marginTop: 20,
  },

  containerViewModal: () => {
    return {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    };
  },

  viewModal: (props) => {
    return {
      width: "70%",
      height: props.height,
      backgroundColor: "white",
      borderRadius: 20,
      borderWidth: 0.5,
      padding: 10,
      alignItems: "center",
    };
  },
});

export default styles;
