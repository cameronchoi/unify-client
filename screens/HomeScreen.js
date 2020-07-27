import React, { useContext } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Card from '../components/UI/Card'
import NormalText from '../components/UI/NormalText'
import MatchCriteria from '../components/UI/MatchCriteria'

export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
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
  }
})
