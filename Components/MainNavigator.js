import React from "react";

import { StyleSheet, View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MainScreen } from "./MainScreen";
import ImageDetails from "./ImageDetails";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={MainScreen} />
        <Stack.Screen name="ImageDetails" component={ImageDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
