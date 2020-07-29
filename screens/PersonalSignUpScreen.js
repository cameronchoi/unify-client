import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import SubmitButton from '../components/UI/SubmitButton'
import MultiLineInput from '../components/UI/MultiLineInput'
import MediumText from '../components/UI/MediumText'
import NormalText from '../components/UI/NormalText'
import BackArrow from '../components/UI/BackArrow'

import { SignUpContext } from '../context/SignUpContext'

export default function PersonalSignUpScreen ({ navigation }) {
  const [state, dispatch] = useContext(SignUpContext)
  const [text, setText] = useState('')
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>
        How would you describe yourself?
      </MediumText>
      <View style={{ alignItems: 'center' }}>
        <MultiLineInput
          placeholder='What are your biggest strengths? What are your long term goals? etc...'
          onChangeText={text => setText(text)}
          value={text}
          style={styles.input}
        />
        <View style={styles.bottomText}>
          <NormalText style={{ fontSize: 12, color: '#a9a9a9' }}>
            Please write at least 50 words. We will be using this to match you
            to others with similar personalities and interests
          </NormalText>
        </View>
        <SubmitButton
          onPress={() => {
            dispatch({ type: 'DESCRIBE_SELF', describeSelf: text })
            navigation.navigate('FriendSignUp')
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
  input: {
    marginTop: 40
  },
  bottomText: {
    paddingHorizontal: 35,
    marginTop: 10,
    marginBottom: 50
  }
})
