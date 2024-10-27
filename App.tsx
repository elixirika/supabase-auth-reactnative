import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text } from "react-native";
import "react-native-url-polyfill/auto";
import Auth from "./components/Auth";
import Overview from "./components/Overview";

type RootStackParamList = {
  Auth: undefined;
  Overview: { session: any };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const handleLogout = (navigation: any) => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Auth" }],
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen
          name="Overview"
          component={Overview}
          options={({ navigation }) => ({
            headerTitle: () => (
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Overview</Text>
            ),
            headerRight: () => (
              <>
                <Button
                  title="Logout"
                  onPress={() => handleLogout(navigation)}
                />
              </>
            ),
            headerLeftLabelVisible: false,
            headerTitleAlign: "center",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
