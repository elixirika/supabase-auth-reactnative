import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-url-polyfill/auto";
import Auth from "./components/Auth";
import Overview from "./components/Overview";
import Settings from "./components/Settings";
import More from "./components/More";

type RootStackParamList = {
  Auth: undefined;
  MainTabs: { session?: any };
};

type TabParamList = {
  Overview: { session?: any };
  Settings: undefined;
  More: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const MainTabNavigator = ({ route }: { route: any }) => {
  const { session } = route.params || {};

  return (
    <Tab.Navigator initialRouteName="Overview">
      <Tab.Screen
        name="Overview"
        component={Overview}
        initialParams={{ session }}
      />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
