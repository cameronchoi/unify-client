import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import Colour from "../constants/colours";
import baseUrl from "../constants/baseUrl";

import MediumText from "../components/UI/MediumText";
import SubmitButton from "../components/UI/SubmitButton";

import { AuthContext } from "../context/AuthContext";

import { SignUpContext } from "../context/SignUpContext";

export default function WelcomeScreen({ navigation }) {
  const [signUpState] = useContext(SignUpContext);
  const [state, dispatch] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, alignItems: "center", marginTop: 200 }}>
        <FontAwesome5 name="user-friends" size={70} color={Colour.primary} />
        <MediumText style={{ fontSize: 30, marginTop: 15 }}>
          Welcome to unify!
        </MediumText>
      </View>
      <View style={{ flex: 1 }}>
        <SubmitButton
          loading={loading}
          onPress={() => {
            const data = {
              email: signUpState.email,
              password: signUpState.password,
              firstName: signUpState.firstName,
              lastName: signUpState.lastName,
              uniName: signUpState.uniName,
              uniYear: signUpState.uniYear,
              degreeId: signUpState.degreeId,
              degreeName: signUpState.degreeName,
              subjectCodes: signUpState.subjectCodes,
              subjectIds: signUpState.subjectIds,
              describeSelf: signUpState.describeSelf,
              describeFriend: signUpState.describeFriend,
              topType: signUpState.avatar.topType,
              hairColour: signUpState.avatar.hairColour,
              clotheType: signUpState.avatar.clotheType,
              skinColour: signUpState.avatar.skinColour,
            };
            console.log(data);
            setLoading(true);
            fetch(`${baseUrl.au}/signup`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((resData) => {
                console.log(resData);
                setLoading(false);
                dispatch({
                  type: "SIGN_IN",
                  token: resData.token,
                  email: resData.email,
                });
              })
              .catch((err) => {
                setLoading(false);
                console.log(err);
              });
          }}
        >
          Get Started
        </SubmitButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
