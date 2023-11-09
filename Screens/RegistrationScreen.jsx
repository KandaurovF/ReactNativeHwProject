import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import img from "../Img/PhotoBG.jpg";

const RegistrationScreen = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <SafeAreaView style={styles.containerMain}>
          <View style={styles.photoBlok}>
            <MaterialCommunityIcons
              name={"plus-circle-outline"}
              style={styles.buttonX}
              size={25}
              color="#FF6C00"
              //   onPress={toggleShowPassword}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Registration</Text>

            <TextInput
              placeholder="Login"
              value={text}
              onChangeText={setText}
            />

            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />

            <Pressable style={styles.button}>
              {/* <Pressable style={styles.button} onPress={signUp}> */}
              <Text style={styles.text}>Sign up</Text>
            </Pressable>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  container: {
    // flex: 1,
    // justifyContent: "flex-end",
    width: "100%",
    height: 449,
    paddingTop: 90,
    backgroundColor: "white",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  photoBlok: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    left: "34%",
    borderRadius: 16,
  },
  title: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
  },
  button: {
    marginTop: 43,
    marginRight: 16,
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  text: {
    color: "white",
  },
});

export default RegistrationScreen;
