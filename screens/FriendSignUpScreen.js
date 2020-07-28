import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import SubmitButton from '../components/UI/SubmitButton'
import MultiLineInput from '../components/UI/MultiLineInput'
import MediumText from '../components/UI/MediumText'
import NormalText from '../components/UI/NormalText'
import BackArrow from '../components/UI/BackArrow'

export default function FriendSignUpScreen ({ navigation }) {
  const [text, setText] = useState('')
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>
        What do you look for in a friend?
      </MediumText>
      <View style={{ alignItems: 'center' }}>
        <MultiLineInput
          placeholder='What kind of qualities do you admire? What kind of values would your friend have? etc...'
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
            navigation.navigate('AvatarSignUp')
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
