import React, { useState, useContext, useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import SubmitButton from "../components/UI/SubmitButton";
import AutocompleteInput from "../components/UI/AutocompleteInput.js";
import MediumText from "../components/UI/MediumText";
import BackArrow from "../components/UI/BackArrow";

import { SignUpContext } from "../context/SignUpContext";

import baseUrl from "../constants/baseUrl";

export default function UniNameSignUpScreen({ navigation }) {
  const [universities, setUniversities] = useState([]);
  const [uniName, setUniName] = useState("");
  const [signUpState, dispatch] = useContext(SignUpContext);

  useEffect(() => {
    const getUniversities = async () => {
      try {
        let res = await fetch(`${baseUrl.au}/uni`);
        const data = await res.json();
        if (data.error) {
          alert(data.error);
        } else {
          setUniversities(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUniversities();
  }, []);

  const validateUniversity = () => {
    const uniNames = universities.map((uni) => uni.name);
    if (uniNames.includes(uniName)) {
      dispatch({ type: "UNI_NAME", uniName });
      navigation.navigate("UniYearSignUp");
    } else {
      alert("Not a valid university name.");
    }
  };

  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack();
        }}
      />
      <MediumText style={styles.title}>My university name is...</MediumText>
      <View style={{ alignItems: "center" }}>
        <AutocompleteInput
          data={universities.map((uni) => uni.name)}
          onChangeText={setUniName}
          value={uniName}
          placeholder="University Name"
          style={styles.test}
        />
        {Platform.OS == "android" ? (
          <View style={styles.submitContainer}>
            <SubmitButton onPress={validateUniversity}>Continue</SubmitButton>
          </View>
        ) : (
          <SubmitButton onPress={validateUniversity}>Continue</SubmitButton>
        )}
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
  submitContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 140,
    zIndex: 0,
  },
});
