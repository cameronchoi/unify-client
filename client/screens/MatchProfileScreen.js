import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import ProfilePicture from "../components/UI/ProfilePicture";
import MediumText from "../components/UI/MediumText";
import NormalText from "../components/UI/NormalText";
import StartButton from "../components/UI/StartButton";
import ReportModal from "../components/UI/ReportModal";

import { MatchContext } from "../context/MatchContext";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Colours from "../constants/colours";
import baseUrl from "../constants/baseUrl";

const MatchProfileScreen = () => {
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
  const [matchState] = useContext(MatchContext);

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl.us}/user/${matchState.matchEmail}`)
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
    <View
      style={styles.container}
      //   contentContainerStyle={{ alignItems: "center" }}
    >
      <ReportModal
        modalOpen={modalOpen}
        backHandler={() => setModalOpen(false)}
      />
      <FlatList
        style={{ marginTop: 10, flex: 1, width: "100%" }}
        contentContainerStyle={{ alignItems: "center", width: "100%" }}
        ListHeaderComponent={
          <>
            <View style={styles.pictureContainer}>
              <ProfilePicture
                style={styles.picture}
                size="medium"
                uri={`https://avataaars.io/png?topType=${topType}&hairColor=${hairColour}&clotheType=${clotheType}&skinColor=${skinColour}&avatarStyle=Circle`}
              />
              <MediumText
                style={{ fontSize: 24, marginBottom: 5, color: "white" }}
              >
                {`${firstName} ${lastName}`}
              </MediumText>
            </View>
            <View style={styles.bigContainer}>
              <View style={styles.schoolContainer}>
                <FontAwesome5 name="school" size={24} color="white" />
                <NormalText style={styles.infoText}>{uniName}</NormalText>
              </View>
              <View style={styles.degreeContainer}>
                <Ionicons name="md-school" size={33} color="white" />
                <NormalText style={styles.infoText}>{degree}</NormalText>
              </View>
            </View>
            <View style={styles.subjectContainer}>
              <NormalText style={styles.subjectTitle}>
                Current Subjects
              </NormalText>
            </View>
          </>
        }
        numColumns={2}
        keyExtractor={(item) => Math.random()}
        data={subjects}
        renderItem={({ item }) => (
          <View style={styles.subjectText}>
            <Text style={{ color: "white" }}>{item}</Text>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.buttonContainer}>
            <StartButton
              onPress={() => {
                setModalOpen(true);
              }}
              title="Report user"
              style={{ backgroundColor: "red" }}
              textColour="white"
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.primary,
    alignItems: "center",
  },
  picture: {
    marginBottom: 15,
  },
  pictureContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  schoolContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0.7,
    borderTopColor: "white",
    borderBottomWidth: 0.7,
    borderBottomColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  degreeContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.7,
    borderBottomColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  infoText: {
    fontSize: 20,
    color: "white",
  },
  subjectContainer: {
    alignItems: "center",
  },
  subjectTitle: {
    fontSize: 20,
    color: "white",
    paddingTop: 15,
  },
  subjectText: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 25,
    marginBottom: 10,
    marginVertical: 15,
    width: 90,
  },
  bigContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 15,
  },
});

export default MatchProfileScreen;
