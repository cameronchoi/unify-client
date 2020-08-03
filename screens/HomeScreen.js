import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Card from '../components/UI/Card'
import NormalText from '../components/UI/NormalText'
import MatchCriteria from '../components/UI/MatchCriteria'
import MatchModal from '../components/UI/MatchModal'

import { MatchContext } from '../context/MatchContext'
import { AuthContext } from '../context/AuthContext'

import Colours from '../constants/colours'

export default function HomeScreen ({ navigation }) {
  const [matchState, matchDispatch] = useContext(MatchContext)
  const [state] = useContext(AuthContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [matchByDegree, setMatchByDegree] = useState(true)
  const [matchBySubject, setMatchBySubject] = useState(true)
  const [matchByPersonality, setMatchByPersonality] = useState(true)
  const [loading, setLoading] = useState(false)
  const [fullName, setFullName] = useState('')
  const [uri, setUri] = useState('')

  const onPressHandler = () => {
    setLoading(true)
    fetch(
      'https://australia-southeast1-unify-40e9b.cloudfunctions.net/api/match',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.userToken}`
        },
        body: JSON.stringify({
          degree: matchByDegree,
          subject: matchBySubject,
          personality: matchByPersonality
        })
      }
    )
      .then(res => res.json())
      .then(resData => {
        if (resData.error) {
          setLoading(false)
          alert(resData.error)
        } else {
          let fullName = `${resData.result.firstName} ${resData.result.lastName}`
          let uri = `https://avataaars.io/png?topType=${resData.result.avatar.topType}&hairColor=${resData.result.avatar.hairColour}&clotheType=${resData.result.avatar.clotheType}&skinColor=${resData.result.avatar.skinColour}&avatarStyle=Circle`
          matchDispatch({
            type: 'SET_MATCH',
            email: resData.result.email,
            fullName,
            id: resData.id,
            uri
          })
          setFullName(fullName)
          setUri(uri)
          setLoading(false)
          setModalOpen(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <View style={styles.container}>
      <MatchModal
        fullName={fullName}
        uri={uri}
        modalOpen={modalOpen}
        sendMessageHandler={() => {
          navigation.navigate('Matches')
          navigation.navigate('Messaging')
          setModalOpen(false)
        }}
        backHandler={() => {
          setModalOpen(false)
        }}
      />

      <View style={styles.criteriaContainer}>
        <MatchCriteria
          isEnabled={matchByDegree}
          setIsEnabled={setMatchByDegree}
          title='Match by degree'
          style={styles.criteria}
          textStyle={{ fontSize: 15 }}
        />
        <MatchCriteria
          isEnabled={matchBySubject}
          setIsEnabled={setMatchBySubject}
          title='Match by subject'
          style={styles.criteria}
          textStyle={{ fontSize: 15 }}
        />
        <MatchCriteria
          isEnabled={matchByPersonality}
          setIsEnabled={setMatchByPersonality}
          title='Match by interests and personality'
          style={styles.lastCriteria}
          textStyle={{ fontSize: 15 }}
        />
      </View>
      <NormalText style={styles.matchText}>Press to find a match</NormalText>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1, width: '100%', height: 400, alignItems: 'center' }}
        onPress={onPressHandler}
      >
        {loading ? (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <ActivityIndicator size='large' />
          </View>
        ) : (
          <Card style={styles.matchButton}>
            <FontAwesome5
              style={{ marginTop: 70 }}
              name='user-friends'
              size={95}
              color='white'
            />
            <NormalText style={{ color: 'white', fontSize: 70 }}>
              unify
            </NormalText>
          </Card>
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  criteria: {
    marginTop: 20
  },
  lastCriteria: {
    marginVertical: 20
  },
  criteriaContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1
  },
  firstButton: {
    backgroundColor: Colours.primary,
    marginVertical: 20
  },
  secondButton: {
    borderColor: Colours.primary,
    borderWidth: 1,
    marginVertical: 20
  },
  matchText: {
    fontSize: 18,
    color: 'black',
    marginTop: 30
  },
  matchButton: {
    width: '80%',
    height: 400,
    marginTop: 30
  }
})
