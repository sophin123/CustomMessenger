import React from "react";

import { StyleSheet, View, Text, ImageBackground } from "react-native";

export default function ImageDetails({ route }) {
  const { imageUrl } = route.params;

  return (
    <View>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    </View>
  );
}
