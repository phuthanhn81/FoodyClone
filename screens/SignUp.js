import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Keyboard,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
  Modal,
} from "react-native";
import { Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import styles from "../css/login/css";

import usersReducer from "../redux/ducks/usersSlice";
import reportReducer from "../redux/ducks/reportSlice";

export default function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const report = useSelector((state) => state.report);
  const dispatch = useDispatch();

  const onSignUpPress = () => {
    Keyboard.dismiss();

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      dispatch(
        reportReducer.actions.setReport({
          screen: "SignUp",
          text: "Điền đầy đủ thông tin",
          report: true,
        })
      );
      return;
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      dispatch(
        reportReducer.actions.setReport({
          screen: "SignUp",
          text: "Email không hợp lệ",
          report: true,
        })
      );
      return;
    }

    if (password !== verifyPassword) {
      dispatch(
        reportReducer.actions.setReport({
          screen: "SignUp",
          text: "Mật khẩu xác minh không đúng",
          report: true,
        })
      );
      return;
    }

    let requestData = {
      UserName: username.trim(),
      Password: password.trim(),
      Email: email.trim(),
    };
    dispatch(usersReducer.actions.userSignUp({ requestData }));
  };

  return (
    <KeyboardAvoidingView
      style={styles.containerView}
      behavior={"height"}
      enabled={false}
    >
      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={report.report}
        onRequestClose={() =>
          dispatch(
            reportReducer.actions.setReport({
              screen: "",
              text: "",
              report: false,
            })
          )
        }
      >
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch(
              reportReducer.actions.setReport({
                screen: "",
                text: "",
                report: false,
              })
            )
          }
        >
          <View style={styles.containerViewModal()}>
            <View style={styles.viewModal({ height: "auto" })}>
              <FontAwesome5 name="exclamation-circle" size={44} color="red" />
              <Text style={{ marginTop: 20, fontSize: 18 }}>{report.text}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginFormView}>
          <Image
            style={{ width: "100%", height: "30%" }}
            source={require("../assets/images/food.jpg")}
          ></Image>

          <TextInput
            placeholder="Tên đăng nhập"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={(text) => setUserName(text)}
          />

          <TextInput
            placeholder="Email"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            placeholder="Mật khẩu"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <TextInput
            placeholder="Mật khẩu xác minh"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            secureTextEntry={true}
            onChangeText={(text) => setVerifyPassword(text)}
          />

          <Button
            buttonStyle={styles.loginButton}
            onPress={() => onSignUpPress()}
            title="Sign Up"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
