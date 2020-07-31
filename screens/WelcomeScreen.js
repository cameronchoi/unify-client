import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'
import Colour from '../constants/colours'

import MediumText from '../components/UI/MediumText'
import SubmitButton from '../components/UI/SubmitButton'

import { AuthContext } from '../context/AuthContext'

import { SignUpContext } from '../context/SignUpContext'

export default function WelcomeScreen ({ navigation }) {
  const [signUpState] = useContext(SignUpContext)
  const [state, dispatch] = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, alignItems: 'center', marginTop: 200 }}>
        <FontAwesome5 name='user-friends' size={70} color={Colour.primary} />
        <MediumText style={{ fontSize: 30, marginTop: 15 }}>
          Welcome to unify!
        </MediumText>
      </View>
      <View style={{ flex: 1 }}>
        <SubmitButton
          disabled={loading}
          onPress={() => {
            setLoading(true)
            fetch(
              'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC34XSAkjcF9JBMptCC6WUwJ1eoToublw4',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: signUpState.email,
                  password: signUpState.password,
                  returnSecureToken: true
                })
              }
            )
              .then(res => res.json())
              .then(resData => {
                console.log(resData)
                setLoading(false)
                fetch(
                  `https://unify-40e9b.firebaseio.com/users/${resData.localId}.json`,
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      firstName: signUpState.firstName,
                      lastName: signUpState.lastName,
                      uniName: signUpState.uniName,
                      uniYear: signUpState.uniYear,
                      degree: signUpState.degree,
                      subjects: signUpState.subjects,
                      describeSelf: signUpState.describeSelf,
                      describeFriend: signUpState.describeFriend,
                      avatar: {
                        topType: signUpState.avatar.topType,
                        hairColour: signUpState.avatar.hairColour,
                        clotheType: signUpState.avatar.clotheType,
                        skinColour: signUpState.avatar.skinColour
                      }
                    })
                  }
                )
                  .then(res => res.json())
                  .then(userData => {
                    console.log('successfully made user')
                    console.log(userData)
                  })

                dispatch({
                  type: 'SIGN_IN',
                  token: resData.idToken,
                  userId: resData.localId
                })
              })
              .catch(err => {
                setLoading(false)
                console.log(err)
              })
          }}
        >
          Get Started
        </SubmitButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
