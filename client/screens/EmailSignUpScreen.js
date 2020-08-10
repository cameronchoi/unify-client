import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import SubmitButton from "../components/UI/SubmitButton";
import Input from "../components/UI/Input";
import MediumText from "../components/UI/MediumText";
import BackArrow from "../components/UI/BackArrow";

import { SignUpContext } from "../context/SignUpContext";

import baseUrl from "../constants/baseUrl";

export default function EmailSignUpScreen({ navigation }) {
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const [signUpState, dispatch] = useContext(SignUpContext);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack();
        }}
      />
      <MediumText style={styles.title}>My email is...</MediumText>
      <View style={{ alignItems: "center" }}>
        <Input
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Email Address"
          style={styles.test}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <SubmitButton
          loading={loading}
          onPress={() => {
            if (validateEmail(text)) {
              setLoading(true);
              fetch(`${baseUrl.us}/email`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: text,
                }),
              })
                .then((res) => res.json())
                .then((resData) => {
                  if (resData.error) {
                    alert(resData.error);
                    setLoading(false);
                  } else {
                    dispatch({ type: "EMAIL", email: text });
                    setLoading(false);
                    navigation.navigate("PasswordSignUp");
                  }
                });
            } else {
              alert("Please input a valid email");
            }
          }}
        >
          Continue
        </SubmitButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 20, marginLeft: 30, marginTop: 20 },
  test: {
    marginTop: 40,
    marginBottom: 70,
  },
});
