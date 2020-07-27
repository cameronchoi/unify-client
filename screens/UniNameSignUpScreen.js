import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import SubmitButton from '../components/UI/SubmitButton'
import Input from '../components/UI/Input'
import MediumText from '../components/UI/MediumText'
import BackArrow from '../components/UI/BackArrow'

export default function EmailSignUpScreen ({ navigation }) {
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>My university name is...</MediumText>
      <View style={{ alignItems: 'center' }}>
        <Input
          placeholder='Email Address'
          style={styles.test}
          keyboardType='email-address'
          autoCapitalize='none'
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
  test: {
    marginTop: 40,
    marginBottom: 70
  }
})
