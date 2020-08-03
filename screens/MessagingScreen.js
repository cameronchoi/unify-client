// @flow
import React, { useState, useContext, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat' // 0.3.0
import { MatchContext } from '../context/MatchContext'
import firebase from 'firebase'

import RealFire from '../firebase/RealFire'
import { View } from 'react-native'

const MessagingScreen = props => {
  const [messages, setMessages] = useState([])
  const [matchState] = useContext(MatchContext)

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyC34XSAkjcF9JBMptCC6WUwJ1eoToublw4',
      authDomain: 'unify-40e9b.firebaseapp.com',
      databaseURL: 'https://unify-40e9b.firebaseio.com',
      projectId: 'unify-40e9b',
      storageBucket: 'unify-40e9b.appspot.com',
      messagingSenderId: '721861398339',
      appId: '1:721861398339:web:3ee2cdb990e674a7cfe9f6',
      measurementId: 'G-RLMF7QHTJR'
    })
  }
  console.log(matchState.id)
  let fire1 = new RealFire(matchState.id)

  const parse = doc => {
    const { timestamp, text, user } = doc.data()
    const newTime = timestamp.toDate()
    const message = {
      _id: doc.id,
      createdAt: newTime,
      text,
      user
    }
    return message
  }

  useEffect(() => {
    let unsubscribe = fire1.db
      .orderBy('timestamp', 'desc')
      .onSnapshot(querySnapshot => {
        let results = []
        querySnapshot.forEach(doc => {
          results.push(parse(doc))
        })
        setMessages(results)
      })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <GiftedChat
        messages={messages}
        onSend={messages => {
          let txt
          console.log('----------------------------')
          console.log(firebase.firestore.FieldValue.serverTimestamp())
          console.log('----------------------------')
          for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i]
            const message = {
              text,
              user,
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
            fire1.db.set(
              firebase.firestore.FieldValue.serverTimestamp(),
              message
            )
            txt = text
          }
          fetch(
            'http://localhost:5000/unify-40e9b/australia-southeast1/api/matches',
            {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: matchState.id,
                message: txt,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
              })
            }
          )
            .then(res => res.json())
            .then(resData => console.log(resData))
            .catch(err => console.log(err))
        }}
        user={{
          _id: matchState.matchEmail,
          name: matchState.fullName,
          avatar: matchState.uri
        }}
      />
    </View>
  )
}

export default MessagingScreen
