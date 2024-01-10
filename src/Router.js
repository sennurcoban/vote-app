import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//pages
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Login from "./screens/Login";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Questions"}}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
