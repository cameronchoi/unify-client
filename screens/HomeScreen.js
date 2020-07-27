import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Card from '../components/UI/Card'
import NormalText from '../components/UI/NormalText'
import MediumText from '../components/UI/MediumText'
import MatchCriteria from '../components/UI/MatchCriteria'
import StartButton from '../components/UI/StartButton'

import Colours from '../constants/colours'
import ProfilePicture from '../components/UI/ProfilePicture'

export default function HomeScreen ({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType='slide' transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            opacity: 0.93
          }}
        >
          <NormalText
            style={{ fontSize: 20, color: 'white', marginVertical: 20 }}
          >
            You have matched with...
          </NormalText>
          <ProfilePicture size='medium' />
          <MediumText
            style={{ fontSize: 20, color: 'white', marginVertical: 20 }}
          >
            Bob Smith
          </MediumText>
          <StartButton
            textColour='white'
            style={styles.firstButton}
            title='Send them a message'
            onPress={() => {
              navigation.navigate('Matches')
              navigation.navigate('Messaging')
              setModalOpen(false)
            }}
          />
          <StartButton
            textColour={Colours.primary}
            style={styles.secondButton}
            title='Go back to home screen'
            onPress={() => {
              setModalOpen(false)
            }}
          />
        </View>
      </Modal>

      <View style={styles.criteriaContainer}>
        <MatchCriteria
          title='Match by degree'
          style={styles.criteria}
          textStyle={{ fontSize: 14 }}
        />
        <MatchCriteria
          title='Match by subjects'
          style={styles.criteria}
          textStyle={{ fontSize: 14 }}
        />
        <MatchCriteria
          title='Match by interests and personality'
          style={styles.criteria}
          textStyle={{ fontSize: 14 }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1, width: '100%', alignItems: 'center' }}
        onPress={() => setModalOpen(true)}
      >
        <Card style={{ width: '80%', height: 400, marginTop: 70 }}>
          <FontAwesome5
            style={{ marginBottom: 100, marginTop: 65 }}
            name='user-friends'
            size={95}
            color='white'
          />
          <NormalText style={{ fontSize: 20, color: 'white' }}>
            Press to find a match
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
  criteriaContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  firstButton: {
    backgroundColor: Colours.primary,
    marginVertical: 20
  },
  secondButton: {
    borderColor: Colours.primary,
    borderWidth: 1,
    marginVertical: 20
  }
})
