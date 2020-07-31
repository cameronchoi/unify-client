import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Card from '../components/UI/Card'
import NormalText from '../components/UI/NormalText'
import MatchCriteria from '../components/UI/MatchCriteria'
import MatchModal from '../components/UI/MatchModal'

import Colours from '../constants/colours'

export default function HomeScreen ({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <View style={styles.container}>
      <MatchModal
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
          title='Match by degree'
          style={styles.criteria}
          textStyle={{ fontSize: 15 }}
        />
        <MatchCriteria
          title='Match by subject'
          style={styles.criteria}
          textStyle={{ fontSize: 15 }}
        />
        <MatchCriteria
          title='Match by interests and personality'
          style={styles.lastCriteria}
          textStyle={{ fontSize: 15 }}
        />
      </View>
      <NormalText style={styles.matchText}>Press to find a match</NormalText>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1, width: '100%', height: 400, alignItems: 'center' }}
        onPress={() => setModalOpen(true)}
      >
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
