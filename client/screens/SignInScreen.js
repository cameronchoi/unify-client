import React, { useContext, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import NormalText from "../components/UI/NormalText";
import { TextInput } from "react-native-paper";
import SubmitButton from "../components/UI/SubmitButton";
import BackArrow from "../components/UI/BackArrow";

import Colours from "../constants/colours";
import baseUrl from "../constants/baseUrl";

import { AuthContext } from "../context/AuthContext";

const SignInScreen = ({ navigation }) => {
  const [state, dispatch] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.upperScreen}>
          <View style={styles.arrowContainer}>
            <BackArrow
              style={styles.backArrow}
              onPress={navigation.goBack}
              color="white"
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <FontAwesome5 name="user-friends" size={70} color="white" />
            <NormalText style={{ color: "white", fontSize: 47 }}>
              unify
            </NormalText>
          </View>
        </View>
        <View style={styles.lowerScreen}>
          <TextInput
            onChangeText={(email) => setEmail(email)}
            value={email}
            placeholder="Email Address"
            autoCapitalize="none"
            keyboardType="email-address"
            mode="outlined"
            style={[styles.input, styles.firstInput]}
          />
          <TextInput
            onChangeText={(password) => setPassword(password)}
            value={password}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            mode="outlined"
            style={styles.input}
          />
          <NormalText
            style={{
              color: "grey",
              fontSize: 12,
              marginBottom: 50,
              marginTop: 12,
              marginRight: 170,
            }}
          >
            forgot password?
          </NormalText>
          <SubmitButton
            loading={loading}
            onPress={() => {
              //   dispatch({ type: 'SIGN_IN', token: 'token' })
              setLoading(true);
              fetch(`${baseUrl.au}/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  password: password,
                }),
              })
                .then((res) => res.json())
                .then((resData) => {
                  setLoading(false);
                  if (!resData.token) {
                    console.log(resData.error);
                    alert("Wrong email or password");
                  } else {
                    dispatch({
                      type: "SIGN_IN",
                      token: resData.token,
                      email: resData.email,
                    });
                  }
                })
                .catch((err) => {
                  setLoading(false);
                  console.log(err);
                });
            }}
          >
            Sign In
          </SubmitButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  backArrow: {
    marginLeft: 25,
    marginTop: 45,
  },
  upperScreen: {
    flex: 3,
    backgroundColor: Colours.primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  lowerScreen: {
    flex: 4,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
  },
  input: {
    width: "70%",
  },
  firstInput: {
    marginTop: 90,
    marginBottom: 30,
  },
});

export default SignInScreen;
