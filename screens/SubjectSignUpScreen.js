import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import Input from '../components/Input'
import MediumText from '../components/MediumText'
import BackArrow from '../components/BackArrow'

export default function SubjectSignUpScreen ({ navigation }) {
  const [text, setText] = useState('')
  const [subjects, setSubjects] = useState([])

  const onSubmitEditingHandler = () => {
    setSubjects(currentSubjects => [...currentSubjects, text])
    setText('')
  }
  return (
    <View>
      <BackArrow
        onPress={() => {
          navigation.goBack()
        }}
      />
      <MediumText style={styles.title}>My current subjects are...</MediumText>
      <View style={{ alignItems: 'center' }}>
        <Input
          onChangeText={text => setText(text)}
          onSubmitEditing={onSubmitEditingHandler}
          autoCapitalize='characters'
          value={text}
          placeholder='Subject Name'
          style={styles.test}
        />
        <View>
          {subjects.map(subject => (
            <View
              key={subject}
              style={{
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'black',
                marginVertical: 3,
                padding: 5,
                borderRadius: 5
              }}
            >
              <Text>{subject}</Text>
            </View>
          ))}
        </View>
        <SubmitButton
          style={styles.subjectButton}
          onPress={() => {
            navigation.navigate('Welcome')
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
    marginBottom: 35
  },
  subjectButton: {
    marginTop: 35
  }
})
