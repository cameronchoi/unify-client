import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import SubmitButton from '../components/UI/SubmitButton'
import Input from '../components/UI/Input'
import MediumText from '../components/UI/MediumText'
import BackArrow from '../components/UI/BackArrow'

import { SignUpContext } from '../context/SignUpContext'

export default function DegreeSignUpScreen ({ navigation }) {
  const [state, dispatch] = useContext(SignUpContext)
  const [text, setText] = useState('')
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>My degree is...</MediumText>
      <View style={{ alignItems: 'center' }}>
        <Input
          onChangeText={text => setText(text)}
          value={text}
          placeholder='Degree Name'
          style={styles.test}
        />
        <SubmitButton
          onPress={() => {
            dispatch({ type: 'DEGREE', degree: text })
            navigation.navigate('SubjectSignUp')
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
