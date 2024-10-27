import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";

const Overview = ({ route, navigation }: { route: any; navigation: any }) => {
  const handleLogout = (navigation: any) => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Auth" }],
    });
  };

  return (
    <View>
      <Text>Welcome to MORE screen</Text>
      <Button title="Logout" onPress={() => handleLogout(navigation)} />
    </View>
  );
};

export default Overview;
