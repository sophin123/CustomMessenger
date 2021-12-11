import React from "react";

import { StyleSheet, View, Text, FlatList } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { ProfileCard } from "./ProfileCard";

const array = Array(8).fill(10);

export const MainScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={array}
        renderItem={({ index }) => (
          <ProfileCard key={index} navigation={navigation} />
        )}
      />
    </View>
  );
};
