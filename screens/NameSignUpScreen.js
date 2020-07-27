import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import SubmitButton from '../components/UI/SubmitButton'
import Input from '../components/UI/Input'
import MediumText from '../components/UI/MediumText'
import BackArrow from '../components/UI/BackArrow'

export default function NameSignUpScreen ({ navigation }) {
  const [firstText, setFirstText] = useState('')
  const [secText, setSecText] = useState('')
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>My name is...</MediumText>
      <View style={{ alignItems: 'center' }}>
        <Input
          onChangeText={firstText => setFirstText(firstText)}
          value={firstText}
          placeholder='First Name'
          style={styles.first}
        />
        <Input
          onChangeText={secText => setSecText(secText)}
          value={secText}
          placeholder='Second Name'
          style={styles.second}
        />
        <SubmitButton
          onPress={() => {
            navigation.navigate('UniYearSignUp')
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
  first: {
    marginTop: 40
  },
  second: {
    marginTop: 40,
    marginBottom: 70
  }
})
