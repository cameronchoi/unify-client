import React, { useState, useEffect, useContext } from "react";
import { Platform, StyleSheet, View } from "react-native";
import SubmitButton from "../components/UI/SubmitButton";
import AutocompleteInput from "../components/UI/AutocompleteInput";
import MediumText from "../components/UI/MediumText";
import BackArrow from "../components/UI/BackArrow";

import { SignUpContext } from "../context/SignUpContext";

import baseUrl from "../constants/baseUrl";

export default function DegreeSignUpScreen({ navigation }) {
  const [degrees, setDegrees] = useState([]);
  const [text, setText] = useState("");
  const [signUpState, dispatch] = useContext(SignUpContext);

  useEffect(() => {
    const getDegrees = async () => {
      try {
        let res = await fetch(
          `${baseUrl.au}/degrees?uniName=${signUpState.uniName}`
        );
        const data = await res.json();
        if (data.error) {
          alert(data.error);
        } else {
          setDegrees(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getDegrees();
  }, []);

  const validateDegree = () => {
    for (let i = 0; i < degrees.length; i++) {
      if (degrees[i].degreeName === text) {
        dispatch({ type: "DEGREE", degreeName: text, degreeId: degrees[i].id });
        return navigation.navigate("SubjectSignUp");
      }
    }
    alert(`Not a valid degree name for ${signUpState.uniName}.`);
  };

  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack();
        }}
      />
      <MediumText style={styles.title}>My degree is...</MediumText>
      <View style={{ alignItems: "center" }}>
        <AutocompleteInput
          data={degrees.map((degree) => degree.degreeName)}
          onChangeText={setText}
          value={text}
          placeholder="Degree Name"
          style={styles.test}
        />
        {Platform.OS == "android" ? (
          <View style={styles.submitContainer}>
            <SubmitButton onPress={validateDegree}>Continue</SubmitButton>
          </View>
        ) : (
          <SubmitButton onPress={validateDegree}>Continue</SubmitButton>
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
