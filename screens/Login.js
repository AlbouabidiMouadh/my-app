import LoginScreen from "react-native-login-screen";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Login = () => {
  return (
    <LoginScreen
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={(value) => {
        username = value;
        console.log("username: ", username);
      }}
      onPasswordChange={(password) => {}}
    />
  );
};

export default Login;

const styles = StyleSheet.create({});
