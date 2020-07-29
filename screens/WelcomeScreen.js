import React, { useContext } from 'react'
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
          onPress={() => {
            console.log(signUpState)
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
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
