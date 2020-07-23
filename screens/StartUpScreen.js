import React, { useContext } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import StyledText from '../components/StyledText'

import Colours from '../constants/colours'
import { AuthContext } from '../authentification/AuthProvider'

export default function StartUpScreen ({ navigation }) {
  const { login } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <StyledText style={{ color: 'white', fontSize: 30 }}>unify</StyledText>
      <Button
        title='Sign in'
        onPress={() => {
          login()
        }}
        color='white'
      />
      <Button
        title='Sign up'
        onPress={() => {
          navigation.navigate('SignIn')
        }}
        color='white'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
