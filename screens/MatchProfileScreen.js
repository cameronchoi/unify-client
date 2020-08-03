import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native'
import ProfilePicture from '../components/UI/ProfilePicture'
import MediumText from '../components/UI/MediumText'
import NormalText from '../components/UI/NormalText'
import StartButton from '../components/UI/StartButton'
import ReportModal from '../components/UI/ReportModal'

import { MatchContext } from '../context/MatchContext'

import Colours from '../constants/colours'

const MatchProfileScreen = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [topType, setTopType] = useState('')
  const [hairColour, setHairColour] = useState('')
  const [clotheType, setClotheType] = useState('')
  const [skinColour, setSkinColour] = useState('')
  const [subjects, setSubjects] = useState([])
  const [uniName, setUniName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [degree, setDegree] = useState('')
  const [loading, setLoading] = useState(false)
  const [matchState] = useContext(MatchContext)

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://australia-southeast1-unify-40e9b.cloudfunctions.net/api/user/${matchState.matchEmail}`
    )
      .then(res => res.json())
      .then(resData => {
        setTopType(resData.avatar.topType)
        setHairColour(resData.avatar.hairColour)
        setClotheType(resData.avatar.clotheType)
        setSkinColour(resData.avatar.skinColour)
        setSubjects(resData.subjects.codes)
        setUniName(resData.uniName)
        setDegree(resData.degree.name)
        setFirstName(resData.firstName)
        setLastName(resData.lastName)

        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        alert('Something wrong happened...')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ReportModal
        modalOpen={modalOpen}
        backHandler={() => setModalOpen(false)}
      />
      <View style={styles.picture}>
        <ProfilePicture
          size='medium'
          uri={`https://avataaars.io/png?topType=${topType}&hairColor=${hairColour}&clotheType=${clotheType}&skinColor=${skinColour}&avatarStyle=Circle`}
        />
      </View>
      <MediumText
        style={{ fontSize: 20 }}
      >{`${firstName} ${lastName}`}</MediumText>
      <View
        style={{
          width: 300,
          borderRadius: 10,
          alignItems: 'center',
          padding: 10,
          marginVertical: 20,
          backgroundColor: Colours.primary
        }}
      >
        <NormalText style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
          {uniName}
        </NormalText>
      </View>
      <View
        style={{
          width: 300,
          borderRadius: 10,
          alignItems: 'center',
          padding: 10,
          marginBottom: 20,
          backgroundColor: Colours.primary
        }}
      >
        <NormalText style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
          {degree}
        </NormalText>
      </View>
      <View
        style={{
          width: 300,
          backgroundColor: Colours.primary,
          borderRadius: 10,
          alignItems: 'center',
          paddingTop: 15,
          paddingBottom: 20,
          marginBottom: 50
        }}
      >
        <NormalText
          style={{
            fontSize: 16,
            marginBottom: 5,
            alignItems: 'center',
            color: 'white'
          }}
        >
          Subjects
        </NormalText>
        <FlatList
          style={{ marginTop: 10 }}
          numColumns={2}
          keyExtractor={item => Math.random()}
          data={subjects}
          renderItem={({ item }) => (
            <View style={styles.subjectText}>
              <Text style={{ color: 'white' }}>{item}</Text>
            </View>
          )}
        />
      </View>
      <StartButton
        onPress={() => {
          setModalOpen(true)
        }}
        title='Report user'
        style={{ backgroundColor: 'red' }}
        textColour='white'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  picture: {
    marginTop: 50,
    marginBottom: 20
  },
  subjectText: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 3,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 30,
    width: 90
  }
})

export default MatchProfileScreen
