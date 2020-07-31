import React, { useContext, useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import NormalText from '../components/UI/NormalText'
import { TextInput } from 'react-native-paper'
import SubmitButton from '../components/UI/SubmitButton'

import Colours from '../constants/colours'

import { AuthContext } from '../context/AuthContext'
import fonts from '../constants/fonts'

const SignInScreen = () => {
  const [state, dispatch] = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View
        style={{
          flex: 1
        }}
      >
        <View style={styles.upperScreen}>
          <FontAwesome5
            style={{ marginTop: 20 }}
            name='user-friends'
            size={70}
            color='white'
          />
          <NormalText style={{ color: 'white', fontSize: 47 }}>
            unify
          </NormalText>
        </View>
        <View style={styles.lowerScreen}>
          <TextInput
            onChangeText={email => setEmail(email)}
            value={email}
            placeholder='Email Address'
            autoCapitalize='none'
            keyboardType='email-address'
            mode='outlined'
            style={[styles.input, styles.firstInput]}
          />
          <TextInput
            onChangeText={password => setPassword(password)}
            value={password}
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry={true}
            mode='outlined'
            style={styles.input}
          />
          <NormalText
            style={{
              color: 'grey',
              fontSize: 12,
              marginBottom: 50,
              marginTop: 12,
              marginRight: 170
            }}
          >
            forgot password?
          </NormalText>
          <SubmitButton
            disabled={loading}
            onPress={() => {
              //   dispatch({ type: 'SIGN_IN', token: 'token' })
              setLoading(true)
              fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC34XSAkjcF9JBMptCC6WUwJ1eoToublw4',
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
                .then(res => res.json())
                .then(resData => {
                  setLoading(false)
                  if (!resData.idToken) {
                    console.log(resData.error)
                    alert('Wrong email or password')
                  } else {
                    dispatch({
                      type: 'SIGN_IN',
                      token: resData.idToken,
                      userId: resData.localId
                    })
                  }
                })
                .catch(err => {
                  setLoading(false)
                  console.log(err)
                })
            }}
          >
            Sign In
          </SubmitButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperScreen: {
    flex: 3,
    backgroundColor: Colours.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lowerScreen: {
    flex: 4,
    width: '100%',
    alignItems: 'center'
  },
  logo: {
    alignItems: 'center'
  },
  input: {
    width: '70%'
  },
  firstInput: {
    marginTop: 90,
    marginBottom: 30
  }
})

export default SignInScreen
