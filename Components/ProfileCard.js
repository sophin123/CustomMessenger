import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import axios from "axios";

const baseURL = "https://reqres.in";

export const ProfileCard = ({ navigation }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/users`)
      .then((response) => {
        setApiData(response.data.data);
        // console.log("response data", response.data);
      })
      .catch((err) => console.log("Unable to retrieve information", err));
  }, []);

  console.log("apiData", apiData);

  return (
    <FlatList
      data={apiData}
      key={(list) => list.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ImageDetails", {
                imageUrl: item.avatar,
              })
            }
          >
            <Image
              style={styles.accountImage}
              source={{ uri: item.avatar }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{ padding: 4 }}>
            <Text style={[styles.textStyle, { fontWeight: "bold" }]}>
              {item.first_name} {item.last_name}
            </Text>

            <Text style={[styles.textStyle, { fontSize: 16 }]}>
              {" "}
              Hi! How are you{" "}
            </Text>
          </View>

          <TouchableOpacity onPress={() => alert("Feature not enabled yet")}>
            <Image
              style={styles.accountImage}
              source={require("../Assets/phone_call.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Feature not enabled yet")}>
            <Image
              style={styles.accountImage}
              source={require("../Assets/video_call.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    marginTop: 40,
    flexDirection: "row",
    borderBottomColor: "rgba(200,0,0,0.4)",
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 1,
    justifyContent: "space-around",
  },
  accountImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 20,
  },
});
