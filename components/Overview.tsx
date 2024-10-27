import React from "react";
import { View, Text } from "react-native";

const Overview = ({ route, navigation }: { route: any; navigation: any }) => {
  const { session } = route.params || {};

  return (
    <View>
      <Text>Welcome to overview screen</Text>
      {session && session.user && <Text>{session.user.id}</Text>}
    </View>
  );
};

export default Overview;
