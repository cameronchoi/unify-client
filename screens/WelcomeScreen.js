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

  const signUp = async (email, password) => {
    setLoading(true)
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC34XSAkjcF9JBMptCC6WUwJ1eoToublw4',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    )
    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    const resData = await response.json()
    console.log(resData)
    setLoading(false)
    dispatch({ type: 'SIGN_IN', token: resData.idToken })
  }

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
            signUp(signUpState.email, signUpState.password)
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
