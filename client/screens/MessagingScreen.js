// @flow
import React, { useState, useContext, useEffect, useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat"; // 0.3.0
import { MatchContext } from "../context/MatchContext";
import firebase from "firebase";

import RealFire from "../firebase/RealFire";
import { View } from "react-native";

import baseUrl from "../constants/baseUrl";

const MessagingScreen = (props) => {
  const [messages, setMessages] = useState([]);
  const [matchState] = useContext(MatchContext);

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyC34XSAkjcF9JBMptCC6WUwJ1eoToublw4",
      authDomain: "unify-40e9b.firebaseapp.com",
      databaseURL: "https://unify-40e9b.firebaseio.com",
      projectId: "unify-40e9b",
      storageBucket: "unify-40e9b.appspot.com",
      messagingSenderId: "721861398339",
      appId: "1:721861398339:web:3ee2cdb990e674a7cfe9f6",
      measurementId: "G-RLMF7QHTJR",
    });
  }
  let fire1 = new RealFire(matchState.id);

  const parse = (doc) => {
    const { timestamp, text, user } = doc.data();
    const newTime = timestamp.toDate();
    const message = {
      _id: doc.id,
      createdAt: newTime,
      text,
      user,
    };
    return message;
  };

  useEffect(() => {
    let unsubscribe = fire1.db
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        let results = [];
        querySnapshot.forEach((doc) => {
          results.push(parse(doc));
        });
        setMessages(results);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => {
          let txt;
          for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
              text,
              user,
              timestamp: firebase.firestore.Timestamp.now(),
            };
            fire1.db.add(message);
            txt = text;
          }
          fetch(`${baseUrl.au}/matches`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: matchState.id,
              message: txt,
            }),
          })
            .then((res) => res.json())
            .then((resData) => console.log(resData))
            .catch((err) => console.log(err));
        }}
        user={{
          _id: matchState.matchEmail,
          name: matchState.fullName,
          avatar: matchState.uri,
        }}
      />
    </View>
  );
};

export default MessagingScreen;
