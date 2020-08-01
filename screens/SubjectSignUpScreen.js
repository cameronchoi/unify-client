import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import SubmitButton from '../components/UI/SubmitButton'
import Input from '../components/UI/Input'
import MediumText from '../components/UI/MediumText'
import BackArrow from '../components/UI/BackArrow'

import { SignUpContext } from '../context/SignUpContext'
import { ActivityIndicator } from 'react-native-paper'

export default function SubjectSignUpScreen ({ navigation }) {
  const [signUpState, dispatch] = useContext(SignUpContext)
  const [text, setText] = useState('')
  const [subjects, setSubjects] = useState([])
  const [subjectIds, setSubjectIds] = useState([])
  const [loading, setLoading] = useState(false)

  const onSubmitEditingHandler = () => {
    setLoading(true)
    fetch(
      'https://australia-southeast1-unify-40e9b.cloudfunctions.net/api/subjects',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subjectCode: text,
          uniName: signUpState.uniName
        })
      }
    )
      .then(res => res.json())
      .then(resData => {
        if (resData.error) {
          alert(resData.error)
          setLoading(false)
          setText('')
        } else {
          setSubjects(currentSubjects => [...currentSubjects, text])
          setSubjectIds(currentSubjectIds => [
            ...currentSubjectIds,
            resData.subjectId
          ])
          setLoading(false)
          setText('')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
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
          placeholder='Subject Code'
          style={styles.test}
        />
        <FlatList
          numColumns={2}
          keyExtractor={item => Math.random()}
          data={subjects}
          renderItem={({ item }) => (
            <View style={styles.subjectText}>
              <Text>{item}</Text>
            </View>
          )}
        />
        <SubmitButton
          style={styles.subjectButton}
          onPress={() => {
            dispatch({
              type: 'SUBJECTS',
              subjectCodes: subjects,
              subjectIds: subjectIds
            })
            navigation.navigate('PersonalSignUp')
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
  },
  subjectText: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 3,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 30,
    width: 90
  }
})
