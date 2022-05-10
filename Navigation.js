import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./NavigationService";

import { Provider } from "react-redux";
import storeToolkit from "./redux/configureStoreToolkit";

import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import OrderCompleted from "./screens/OrderCompleted";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

export default function Navigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={storeToolkit}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
