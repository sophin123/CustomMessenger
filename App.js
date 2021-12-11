import React, { useState } from "react";
import { View, Button, Text, Image, StyleSheet, FlatList } from "react-native";
import { ProfileCard } from "./Components/ProfileCard";

import { MainNavigator } from "./Components/MainNavigator";

import { MainScreen } from "./Components/MainScreen";

export default function App() {
  const array = Array(8).fill(10);

  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
