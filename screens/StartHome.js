import React from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const { height } = Dimensions.get("window");

function StartHome({ navigation }) {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <ImageBackground
          style={style.image}
          source={require("../assets/monument.png")}
        />
        <View style={style.textContainer}>
          <Text style={style.textLarge}>
            Share and Discover monuments pictures and videos Now
          </Text>
          <Text style={style.textLittle}>
            Explore all the monuments in our Country and feel free to share and
            react to all posts.
          </Text>
        </View>
        <View style={style.buttonsContainer}>
          <TouchableOpacity
            style={style.buttonLogin1}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={style.buttonLoginText1}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonLogin2}
            onPress={() => navigation.navigate("TryNow")}
          >
            <Text style={style.buttonLoginText2}>Try Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    height: height / 2.5,
    marginTop: 30,
    marginBottom: 40,
  },
  textContainer: {
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  textLarge: {
    fontSize: 35,
    color: "#95BDFF",
    fontFamily: "poppins-bold",
    textAlign: "center",
    marginBottom: 10,
  },
  textLittle: {
    fontSize: 15,
    color: "black",
    fontFamily: "poppins-bold",
    textAlign: "center",
    paddingTop: 15,
  },
  buttonsContainer: {
    marginTop: 150,
    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonLogin1: {
    backgroundColor: "#95BDFF",
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: "48%",
    borderRadius: 10,
    shadowColor: "#95BDFF",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonLoginText1: {
    fontFamily: "poppins-bold",
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  buttonLogin2: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: "48%",
    borderRadius: 10,
  },
  buttonLoginText2: {
    fontFamily: "poppins-bold",
    color: "#95BDFF",
    fontSize: 25,
    textAlign: "center",
  },
});

export default StartHome;
