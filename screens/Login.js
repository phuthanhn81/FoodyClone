import React, { useState, useEffect } from "react";
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
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import styles from "../css/login/css";

import usersReducer from "../redux/ducks/usersSlice";

export default function Login({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const onLoginPress = () => {
    dispatch(
      usersReducer.actions.userLogin({
        UserName: username,
        Password: password,
      })
    );
  };

  const users = useSelector((state) => state.users);
  useEffect(() => {
    if (users.statusLogin === 200) {
      navigation.navigate("Home");
    }
    if (users.statusLogin === 404) {
      setModalVisible(true);
    }
  }, [users]);
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
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.containerViewModal()}>
            <View style={styles.viewModal({ height: "auto" })}>
              <FontAwesome5 name="exclamation-circle" size={44} color="red" />
              <Text style={{ marginTop: 20, fontSize: 18 }}>
                Tên đăng nhập hoặc mật khẩu không đúng
              </Text>
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
            placeholder="Mật khẩu"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            buttonStyle={styles.loginButton}
            onPress={() => onLoginPress()}
            title="Login"
          />
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.textSignup}>Tạo tài khoản</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
