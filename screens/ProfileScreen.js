import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { AuthContext } from "../context/AuthContext";
import ProfilePicture from "../components/UI/ProfilePicture";
import MediumText from "../components/UI/MediumText";
import NormalText from "../components/UI/NormalText";

import AvatarModal from "../components/UI/AvatarModalForProfile";
import Colours from "../constants/colours";
import StartButton from "../components/UI/StartButton";

export default function ProfileScreen({ navigation }) {
  const [state, dispatch] = useContext(AuthContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [topType, setTopType] = useState("");
  const [hairColour, setHairColour] = useState("");
  const [clotheType, setClotheType] = useState("");
  const [skinColour, setSkinColour] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [uniName, setUniName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [degree, setDegree] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://australia-southeast1-unify-40e9b.cloudfunctions.net/api/user`,
      {
        headers: {
          Authorization: `Bearer ${state.userToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((resData) => {
        setTopType(resData.avatar.topType);
        setHairColour(resData.avatar.hairColour);
        setClotheType(resData.avatar.clotheType);
        setSkinColour(resData.avatar.skinColour);
        setSubjects(resData.subjects.codes);
        setUniName(resData.uniName);
        setDegree(resData.degree.name);
        setFirstName(resData.firstName);
        setLastName(resData.lastName);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Something wrong happened...");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <AvatarModal
        currentTopType={topType}
        currentHairColour={hairColour}
        currentClotheType={clotheType}
        currentSkinColour={skinColour}
        saveHandler={(topType, hairColour, clotheType, skinColour) => {
          setTopType(topType);
          setHairColour(hairColour);
          setClotheType(clotheType);
          setSkinColour(skinColour);
        }}
        modalOpen={modalOpen}
        backHandler={() => setModalOpen(false)}
      />
      <TouchableOpacity
        style={styles.picture}
        onPress={() => setModalOpen(true)}
      >
        <ProfilePicture
          size="medium"
          uri={`https://avataaars.io/png?topType=${topType}&hairColor=${hairColour}&clotheType=${clotheType}&skinColor=${skinColour}&avatarStyle=Circle`}
        />
      </TouchableOpacity>
      <MediumText style={{ fontSize: 20, marginBottom: 5 }}>
        {`${firstName} ${lastName}`}
      </MediumText>
      <View
        style={{
          width: 300,
          borderRadius: 10,
          alignItems: "center",
          padding: 10,
          marginVertical: 20,
          backgroundColor: Colours.primary,
        }}
      >
        <NormalText style={{ fontSize: 16, marginBottom: 5, color: "white" }}>
          {uniName}
        </NormalText>
      </View>
      <View
        style={{
          width: 300,
          borderRadius: 10,
          alignItems: "center",
          padding: 10,
          marginBottom: 20,
          backgroundColor: Colours.primary,
        }}
      >
        <NormalText style={{ fontSize: 16, marginBottom: 5, color: "white" }}>
          {degree}
        </NormalText>
      </View>
      <View
        style={{
          width: 300,
          backgroundColor: Colours.primary,
          borderRadius: 10,
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 20,
          marginBottom: 20,
        }}
      >
        <NormalText
          style={{
            fontSize: 16,
            marginBottom: 5,
            alignItems: "center",
            color: "white",
          }}
        >
          Subjects
        </NormalText>
        <FlatList
          style={{ marginTop: 10 }}
          numColumns={2}
          keyExtractor={(item) => Math.random()}
          data={subjects}
          renderItem={({ item }) => (
            <View style={styles.subjectText}>
              <Text style={{ color: "white" }}>{item}</Text>
            </View>
          )}
        />
      </View>
      <StartButton
        onPress={() => {
          dispatch({ type: "SIGN_OUT" });
        }}
        title="Sign Out"
        style={{
          backgroundColor: Colours.secondary,
        }}
        textColour="white"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
  },
  picture: {
    marginBottom: 20,
  },
  subjectText: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 3,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 30,
    width: 90,
  },
});
