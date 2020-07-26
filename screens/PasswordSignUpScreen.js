import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import Input from '../components/Input'
import MediumText from '../components/MediumText'
import BackArrow from '../components/BackArrow'

export default function PasswordSignUpScreen ({ navigation }) {
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>My password is...</MediumText>
      <View style={{ alignItems: 'center' }}>
        <Input
          placeholder='Password'
          style={styles.signUpInput}
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <SubmitButton
          onPress={() => {
            navigation.navigate('NameSignUp')
          }}
        >
          Continue
        </SubmitButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 20, marginLeft: 30, marginTop: 20 },
  signUpInput: {
    marginTop: 40,
    marginBottom: 70
  }
})
